import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      
      <select 
        // Atualiza o valor quando o usuário escolhe uma opção
        onChange={evento => props.aoAlterado(evento.target.value)} 
        required={props.obrigatorio} 
        value={props.value}
      >
        <option value="">Selecione um time...</option>
        
        {/* Aqui usamos 'itens' (plural) que vem do Formulario */}
        {props.itens?.map((it) => {
          return <option key={it}>{it}</option>
        })}

      </select>
    </div>
  );
};

export default ListaSuspensa;