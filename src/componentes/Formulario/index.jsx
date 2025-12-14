import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa/index.jsx";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [times = [], setTime]  = useState("")
  
  const aoSalvar = (e) => {
    e.preventDefault();

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      times,
    });
  };
  return (
    <section className="Formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card dos colaboradores</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu Cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da Imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
      <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times} 
          value={times}
          aoAlterado={valor => setTime(valor)}
        />
      </form>
    </section>
  );
};

export default Formulario;
