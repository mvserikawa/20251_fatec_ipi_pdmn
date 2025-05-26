//rafce
import './Accordion.css'
import React from 'react'
import { useState } from 'react';
import {Card} from 'primereact/card';

const Accordion = ({itens}) => {


    const [indiceAtivo, setIndiceAtivo] = useState(null)
    const itemClicado = (indice) => {
        setIndiceAtivo(indice)
    }


    const expressaoJSX = itens.map((item, indice) => {
      // escolher entre a palavra down e a palavra right em função de o item da vez ter
      // sido o oultimo clicado ou não, usando as variaveis de indice ativo e do indice da vez
      // operador ternario
      const classExibirIcone = indice === indiceAtivo ? 'down' : 'right'
      // escolher entre hidden e a cadeia vazia
      const classExibirConteudo = indice === indiceAtivo ? '' : 'hidden'
        return (
          <Card id="accordion" key={indice} className='border-1 border-400'>
            <div onClick={() => itemClicado(indice)}>
                <i className={`pi pi-angle-down-${classExibirIcone}`}></i>
                <h5 className='inline ml-3'>{item.titulo}</h5>
            </div>
            <p className={`${classExibirConteudo}`}>
                {item.conteudo}
            </p>
          </Card> 
        )
    })
  return (
    <div>
        <p>{indiceAtivo}</p>
        {
          expressaoJSX 
        }
    </div>
  )
}

export default Accordion