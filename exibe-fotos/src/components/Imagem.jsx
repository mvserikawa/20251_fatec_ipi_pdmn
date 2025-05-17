// rafce
import React from 'react'

const Imagem = ({src, alt, imgStyle}) => {
    //const {src, alt} = props //desestruturação do objeto
    // const src = props.src
    // const alt = props.alt
  return (
    <div className={`${imgStyle} flex justiy-content-center`}>
        <img src={src} alt={alt}></img>
    </div>
  )
}

export default Imagem