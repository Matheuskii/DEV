
import './CampoTexto.css'


const CampoTexto = (props) =>{

  // let valor = 'Rhuan'

    const aoDigitar = (evento) => {
      props.aoAlterado(evento.target.value)
    }

   return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input value={props.value} onChange={aoDigitar} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
    </div>
   )
}

export default CampoTexto