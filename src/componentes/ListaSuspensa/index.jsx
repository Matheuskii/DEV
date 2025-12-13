import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={!!props.obrigatorio}
        value={props.value ?? ""}
        onChange={(e) =>
          typeof props.aoAlterado === "function" &&
          props.aoAlterado(e.target.value)
        }
      >
        <option value="">Selecione</option>
        {props.item?.map((it) => (
          <option key={it} value={it}>
            {it}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
