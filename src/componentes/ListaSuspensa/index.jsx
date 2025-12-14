import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      
      <select 
        // Ligação com o estado do formulário (controlado)
        onChange={evento => props.aoAlterado(evento.target.value)} 
        required={props.obrigatorio} // Use o nome da prop que você passou no Formulario
        value={props.value}
      >
        <option value="">Selecione um time...</option>
        
        {props.itens?.map((it) => {
          return <option key={it}>{it}</option>
        })}

      </select>
    </div>
  );
};

export default ListaSuspensa;