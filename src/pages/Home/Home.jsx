import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import "./Home.scss";
import Storage from "../../components/Storage/Storage";

export default function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });
  }, []);

  const [activeComponent, setActiveComponent] = useState();

  function handleClickMenuItem(e) {
    let menuItems = document.querySelectorAll('.home__buttons__menu-item');
    menuItems.forEach((item) => {
      item.classList.remove('home__buttons__menu-item')
    })
    e.target.classList.add('home__buttons__menu-item')
    const value = e.target.attributes.value.textContent;
    setActiveComponent(value)
  }

  const renderContent = () => {
    if (activeComponent === "estoque") {
      return <Storage />;
    } else if (activeComponent === "whatsapp") {
      return <h1>💰 Página de Vendas</h1>;
    } else if (activeComponent === "relatorios") {
      return <h1>📊 Página de Relatórios</h1>;
    } else {
      return <h1>🏠 Bem-vindo ao Painel</h1>;
    }
  };

  if (userLoggedIn === false) {
    return <Navigate to="/login" />;
  }

  if (userLoggedIn === true) {
    return (
      <div className="home">
        <div className="home__buttons">
          <h1>Brasil Motors</h1>
          <ul>
            <li className="" value="estoque" onClick={(e) => handleClickMenuItem(e)}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#757575"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.9600000000000002"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8 17H16M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17M8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17M16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17M10 5V11M4 11L4.33152 9.01088C4.56901 7.58593 4.68776 6.87345 5.0433 6.3388C5.35671 5.8675 5.79705 5.49447 6.31346 5.26281C6.8993 5 7.6216 5 9.06621 5H12.4311C13.3703 5 13.8399 5 14.2662 5.12945C14.6436 5.24406 14.9946 5.43194 15.2993 5.68236C15.6435 5.96523 15.904 6.35597 16.425 7.13744L19 11M4 17H3.6C3.03995 17 2.75992 17 2.54601 16.891C2.35785 16.7951 2.20487 16.6422 2.10899 16.454C2 16.2401 2 15.9601 2 15.4V14.2C2 13.0799 2 12.5198 2.21799 12.092C2.40973 11.7157 2.71569 11.4097 3.09202 11.218C3.51984 11 4.0799 11 5.2 11H17.2C17.9432 11 18.3148 11 18.6257 11.0492C20.3373 11.3203 21.6797 12.6627 21.9508 14.3743C22 14.6852 22 15.0568 22 15.8C22 15.9858 22 16.0787 21.9877 16.1564C21.9199 16.5843 21.5843 16.9199 21.1564 16.9877C21.0787 17 20.9858 17 20.8 17H20"
                    stroke="#757575"
                    stroke-width="1.6799999999999997"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Estoque
            </li>
            <li value='whatsapp' onClick={(e) => handleClickMenuItem(e)}>
              <svg
                fill="#757575"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#757575"
                stroke-width="1.92"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path d="M6,59a1,1,0,0,1-.95-1.32L9,46.06A27.1,27.1,0,0,1,13,13,26.93,26.93,0,0,1,51,13h0A26.94,26.94,0,0,1,20.22,56.23L6.2,59Zm14.35-4.85a1,1,0,0,1,.45.11A24.94,24.94,0,0,0,49.63,14.37h0a24.93,24.93,0,0,0-35.26,0,25.08,25.08,0,0,0-3.4,31,1,1,0,0,1,.1.86L7.51,56.72,20.17,54.2Z"></path>
                  <path d="M39.17,46a8.46,8.46,0,0,1-.92,0c-5.31-.58-12-5.83-13.89-7.68h0c-1.85-1.85-7.11-8.58-7.68-13.89-.46-4.24,2.37-7.12,3.61-8.17a2.87,2.87,0,0,1,2-.69l2.7.09a1,1,0,0,1,.9.65c.6,1.59,2.54,6.88,2.54,8.25,0,1.2-1.06,2.13-2,2.95-.2.17-.47.41-.63.58a28.74,28.74,0,0,0,3.61,5.16,28.77,28.77,0,0,0,5.16,3.61c.17-.17.41-.44.58-.63.82-.94,1.75-2,3-2,1.37,0,6.66,1.94,8.25,2.54a1,1,0,0,1,.65.9l.09,2.7a3,3,0,0,1-.69,2A9.82,9.82,0,0,1,39.17,46ZM25.78,36.88c1.65,1.65,8,6.6,12.69,7.11,3.29.35,5.59-1.92,6.43-2.91a1,1,0,0,0,.22-.66l-.07-2a47.65,47.65,0,0,0-6.92-2.18c-.32,0-1.11.93-1.45,1.32-.68.78-1.22,1.39-2,1.39-1.27,0-5.7-3.28-6.69-4.27S23.75,29.23,23.75,28c0-.75.61-1.29,1.39-2,.38-.34,1.29-1.12,1.32-1.45a47.7,47.7,0,0,0-2.18-6.92l-2-.07a1,1,0,0,0-.66.22c-1,.84-3.27,3.14-2.91,6.42.51,4.72,5.46,11,7.11,12.69Zm9,0Z"></path>
                </g>
              </svg>
              Whatsapp
            </li>
          </ul>
        </div>
        <div className="home__details">
          {renderContent()}
        </div>
      </div>
    );
  }
}
