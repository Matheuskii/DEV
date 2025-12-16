import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa/index.jsx"; // Pode deixar sem o index.jsx também, o React entende
import Botao from "../Botao"; // Importante importar o Botão
import { useState } from "react";

const Formulario = (props) => {
  // Estados para guardar o que o usuário digita
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    
    // Passa os dados para o App.js
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    // Limpa os campos depois de salvar (Melhora a experiência do usuário)
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
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
          label="Time"
          itens={props.times} 
          value={time}
          aoAlterado={valor => setTime(valor)}
        />
        
        <Botao texto="Criar Colaborador" />
      </form>
    </section>
  );
};

export default Formulario;