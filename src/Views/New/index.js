import React, {useState, useMemo} from 'react';
import './style.css';
import api from '../../Services/api';

import came from '../../assets/came.png'

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(()=>{
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user')

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots',  data,{
            headers: { user_id }
        })

        history.push('/dashboard');

    }
    return (
        <form onSubmit={handleSubmit}>
            <label 
                id="thumbnail" 
                style={{backgroundImage: `url(${preview})`}}
                className={thumbnail ? 'has-thumbnail' : ''}

            >
                <input type="file" onChange={event =>{setThumbnail(event.target.files[0])}}/>
                <img src={came} alt=""/>
            </label>
            <label htmlFor="company">EMPRESA *</label>
            <input 
                type="text"
                id="company"
                placeholder="Sue empresa aqui"
                value={company}
                onChange={event => {setCompany(event.target.value)}}
            />

            <label htmlFor="techs">TECNOLOGIAS *<span>(separadas por vírgula</span></label>
            <input 
                type="techs"
                id="company"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => {setTechs(event.target.value)}}
            />

            <label htmlFor="price">VALOR DA DIÁRIA *<span>(em branco para GRATUITO)</span></label>
            <input 
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => {setPrice(event.target.value)}}
            />
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
    
}