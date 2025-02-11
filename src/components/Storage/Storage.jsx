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
      <div className="storage__list">
        <ul className="storage__list-header">
          <li>Nome</li>
          <li>Preço</li>
          <li>Ano Fabricação</li>
          <li>Ano Modelo</li>
        </ul>
        <ul className="storage__list-items">
          {carros.map((carro, index) => {
            return (
              <li key={index}>
                <span>{carro.nome}</span>
                <span>{carro.preco}</span>
                <span>{carro.anoFabricacao}</span>
                <span>{carro.anoModelo}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
