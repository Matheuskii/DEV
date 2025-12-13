import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa/index.jsx";
import Botao from "../Botao/index.jsx";
import { useState } from "react";

const Formulario = (props) => {
  const times = [
    "Front-end",
    "Data Science",
    "Devops",
    "Mobile",
    "UX e Design",
    "Segurança da informação",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    console.log(time)
    if (typeof props.aoColaboradorCadastrado === "function") {
      props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time, // -> envia o time selecionado
      });
      setNome("");
      setCargo("");
      setImagem("");
      setTime("");
    }
  };

  return (
    <section className="Formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card dos colaboradores</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={nome}
          aoAlterado={(valor) => setNome(valor)}
          item={props.times}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu Cargo"
          value={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da Imagem"
          value={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time:"
          itens={props.times}
          value={time}
          aoAlterado={(valor) => setTime(valor)}
          i
        />
        <Botao texto="Criar colaborador" />
      </form>
    </section>
  );
};

export default Formulario;