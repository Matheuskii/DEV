import './Time.css';

export default function Time({ nome, corPrimaria, corSecundaria, colaboradores = [] }) {
  return (
    console.log(colaboradores),
    <div className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{borderColor: `${corSecundaria}`, borderBottom: `4px solid ${corPrimaria}`, padding: '8px 12px' }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.length === 0 ? (
          <p style={{ padding: '8px 12px' }}>Nenhum Colaborador</p>
        ) : (
          colaboradores.map(col => (
            console.log(col),
            <div key={col.nome} className="colaborador">
              <p>
              {col.nome}, {col.cargo}, <img src={col.imagem} alt={col.nome} />
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
