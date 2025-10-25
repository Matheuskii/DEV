import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  /* */

  //  console.log(times)
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>

      <select required={props.req}>
        {props.item.map((itens) => (
          <option key={itens}>{itens}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
