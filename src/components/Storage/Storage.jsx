import AddEditCar from "../AddEditCar/AddEditCar";
import "./Storage.scss";
import PropTypes from "prop-types";

export default function Storage({ storage }) {
  
  function addEditCar() {
  }

  return (
    <div className="storage">
      <h2>Estoque</h2>
      <div className="storage__buttons">
        <ul>
        <li>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#C5291C">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      <line fill="none" stroke="#C5291C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                      <line fill="none" stroke="#C5291C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span>Alterar</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#C5291C">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      <line fill="none" stroke="#C5291C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                      <line fill="none" stroke="#C5291C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span>Adicionar</span>
          </li>
        </ul>
      </div>
      <div className="storage__list">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Cor</th>
              <th>Km</th>
              <th>Ano Fabricação</th>
              <th>Ano Modelo</th>
            </tr>
          </thead>
          <tbody>
            {storage.map((carro, index) => (
              <tr key={index}>
                <td>{carro.nome}</td>
                <td>{carro.preco}</td>
                <td>{carro.cor}</td>
                <td>{carro.km}</td>
                <td>{carro.anoFabricacao}</td>
                <td>{carro.anoModelo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {addEditCar()}
    </div>
  );
}

Storage.propTypes = {
  storage: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
      cor: PropTypes.string.isRequired,
      km: PropTypes.number.isRequired,
      anoFabricacao: PropTypes.number.isRequired,
      anoModelo: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Storage.defaultProps = {
  storage: [],
};
