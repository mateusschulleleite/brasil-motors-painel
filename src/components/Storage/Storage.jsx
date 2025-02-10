import "./Storage.scss";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Storage() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "estoque"));
        const carrosList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCarros(carrosList);
      } catch (error) {
        console.error("Erro ao buscar carros:", error);
      }
    };

    fetchCarros();
  }, []);
  return (
    <div className="storage">
      <h2>Estoque</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ano Fabricação</th>
            <th>Ano Modelo</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((carro, index) => {
            return (
              <tr key={index}>
                <td>{carro.nome}</td>
                <td>{carro.preco}</td>
                <td>{carro.anoFabricacao}</td>
                <td>{carro.anoModelo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
