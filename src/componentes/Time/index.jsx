import Colaborador from '../Colaborador'; // Importe o novo componente
import './Time.css';

export default function Time({ nome, corPrimaria, corSecundaria, colaboradores = [] }) {
  // Se não tiver colaboradores, não mostre o time (opcional, mas fica mais limpo)
  return (
    (colaboradores.length > 0) && <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map(col => (
             <Colaborador 
                key={col.nome}
                nome={col.nome} 
                cargo={col.cargo} 
                imagem={col.imagem}
                corDeFundo={corPrimaria} 
                
             />
        ))}
      </div>
    </section>
  );
}
