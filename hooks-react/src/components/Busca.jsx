//rafc
import React, { useState, useEffect } from 'react'
import {IconField} from 'primereact/iconfield';
import {InputText} from 'primereact/inputtext';
import {InputIcon} from 'primereact/inputicon';
import axios from 'axios';
import striptags from 'striptags';


const Busca = () => {
    const[termoDeBusca, setTermoDeBusca] = useState('Python')

    const [resultados, setResultados] = useState([])

   useEffect (() => {
    const fazerBusca = async () => {
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
            params : {
                action: 'query',
                list: 'search',
                format: 'json',
                origin: '*',
                srsearch: termoDeBusca
            }
        })
        setResultados(data.query.search)
    }
    fazerBusca()
   } , [termoDeBusca])


  return (
    <div>
        <IconField iconPosition='left'>
            <InputIcon className='pi pi-search'/>
            <InputText 
            placeholder='Buscar...' 
            onChange={(e) => {setTermoDeBusca(e.target.value)}}
            value={termoDeBusca} />
        </IconField>
        {resultados.map((resultado) => (
        <div 
            key={resultado.pageid}
            className='my-2 border border-1 border-400'>
            <div className='border-bottom border-1 border-400 p-2 text-center 
            font-bold'>
                {resultado.title}
            </div>
            <div className='p-2'>
                <span dangerouslySetInnerHTML={{__html: resultado.snippet}}></span>
            </div>
        </div>
        ))
        }
    </div>
  )
}

export default Busca