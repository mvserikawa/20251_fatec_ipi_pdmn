//rcc
import React, { Component } from 'react'
import {Button} from 'primereact/button'
import {IconField} from 'primereact/iconfield'
import {InputIcon} from 'primereact/inputicon'
import {InputText} from 'primereact/inputtext'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
        //atualizar a váriavel de estado termoDeBusca para que ela armazene aquilo
        //que foi digitado pelo usuário até então
        this.setState({termoDeBusca: event.target.value})
    }

    onFormSubmit = (event) => {
      event.preventDefault()
      // ao clicar no botão ok, o termno digitado 
      // deve aparecer no console do navegador
    }


  render() {
    return (
      <form>
        <div
          className='flex flex-column'>
              <IconField iconPosition='left'>
                  <InputIcon className='pi pi-search'></InputIcon>
                  <InputText
                      className='w-full'
                      placeholder={this.props.dica}
                      onChange={this.onTermoAlterado}
                      value={this.state.termoDeBusca}/>
              </IconField>
              <Button
                  label="OK"
                  outlined/>
                  
        </div>
      </form>
    )
  }
}

