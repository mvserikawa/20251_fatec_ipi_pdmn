import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {

  
const textoOK ="Já chegou!"
const textoNOK ="Ainda não chegou..."
const funcaoOK = () => alert("Agradecemos o feedback!")
const funcaoNOK = () => alert("Vamos verificar o que aconteceu!")
const componentesFeedback = 

  <Feedback
    textoOK ={textoOK}
    funcaoOK ={funcaoOK}
    textoNOK ={textoNOK}
    funcaoNOK ={funcaoNOK}
  
  />

  return (
    <div className="container border rounded mt-2">
      <div className="row">

        <div className="col-12 col-md-6 col-xxl-3">

        <Cartao 
        cabecalho="22/04/2025">
          <Pedido 
          icone="hippo"
          titulo="Hipopótamo fêmea"
          descricao="Hipopótamo fêmea fica pulsando sozinha"
          />
          {componentesFeedback}
        </Cartao>

        </div>
      
      
    
        <div className="col-12 col-md-6 col-xxl-3">

        <Cartao 
        cabecalho="22/04/2025">
          <Pedido 
          icone="headset"
          titulo="Headset"
          descricao="Headset Bluetooth"
          />
          {componentesFeedback}
        </Cartao>
          
        </div>

        <div className="col-12 col-md-6 col-xxl-3">

        <Cartao 
        cabecalho="22/04/2025">
          <Pedido 
          icone="gamepad"
          titulo="Gamepad"
          descricao="Controle Nintendo"
          />
          {componentesFeedback}
        </Cartao>
          
        </div>
    

        <div className="col-12 col-md-6 col-xxl-3">
        
        <Cartao 
        cabecalho="22/04/2025">
          <Pedido 
          icone="snowman"
          titulo="Boneco de Neve"
          descricao="Este boneco de neve fica balançando sozinho"
          />
          {componentesFeedback}
        </Cartao>
          
        </div>
      </div>

    </div>
    

  )

}
export default App
