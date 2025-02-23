import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { auth, db } from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import "./Home.scss";
import Storage from "../../components/Storage/Storage";
import { collection, getDocs } from "firebase/firestore";
import Logo from "../../components/Logo/Logo";
import CloseModal from "../../components/CloseModal/CloseModal";

export default function Home() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function openMenu() {
    let menu = document.querySelector("nav");
    if (isMenuOpened === false) {
      menu.classList.add("menu-opened");
      setIsMenuOpened(true);
    } else {
      menu.classList.remove("menu-opened");
      setIsMenuOpened(false);
    }
  }

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
    let menuItems = document.querySelectorAll(".home__buttons__menu-item");
    menuItems.forEach((item) => {
      item.classList.remove("home__buttons__menu-item");
    });
    e.target.classList.add("home__buttons__menu-item");
    const value = e.target.attributes.value.textContent;
    setActiveComponent(value);
    openMenu()
  }

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
  });

  const renderContent = () => {
    if (activeComponent === "estoque") {
      return <Storage storage={carros} />;
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
      <div className="dashboard">
        <div className="dashboard__menu">
          <div
            className="dashboard__menu-hamburguer"
            onClick={() => {
              openMenu();
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12H20M4 8H20M4 16H12"
                  stroke="#c5291c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <Logo />
          {isMenuOpened ? (
            <CloseModal display="block" />
          ) : (
            <CloseModal display="none" />
          )}

          <nav>
            <div
              onClick={() => {
                openMenu();
              }}
              className="dashboard__menu-hamburguer-close"
            >
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="#c5291c"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#c5291c"
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                  ></path>
                </g>
              </svg>
            </div>
            <Logo />
            <ul>
              <li
                className=""
                value="estoque"
                onClick={(e) => handleClickMenuItem(e)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.4856 1.12584C12.1836 0.958052 11.8164 0.958052 11.5144 1.12584L2.51436 6.12584L2.5073 6.13784L2.49287 6.13802C2.18749 6.3177 2 6.64568 2 7V16.9999C2 17.3631 2.19689 17.6977 2.51436 17.874L11.5022 22.8673C11.8059 23.0416 12.1791 23.0445 12.4856 22.8742L21.4856 17.8742C21.8031 17.6978 22 17.3632 22 17V7C22 6.64568 21.8125 6.31781 21.5071 6.13813C21.4996 6.13372 21.4921 6.12942 21.4845 6.12522L12.4856 1.12584ZM5.05923 6.99995L12.0001 10.856L14.4855 9.47519L7.74296 5.50898L5.05923 6.99995ZM16.5142 8.34816L18.9409 7L12 3.14396L9.77162 4.38195L16.5142 8.34816ZM4 16.4115V8.69951L11 12.5884V20.3004L4 16.4115ZM13 20.3005V12.5884L20 8.69951V16.4116L13 20.3005Z"
                      fill="#202224"
                    ></path>{" "}
                  </g>
                </svg>
                Estoque
              </li>
              <li value="whatsapp" onClick={(e) => handleClickMenuItem(e)}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                      fill="#202224"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                      fill="#202224"
                    ></path>{" "}
                  </g>
                </svg>
                Whatsapp
              </li>
            </ul>
            <div className="dashboard__menu-logout">
              Sair
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15 12L6 12M6 12L8 14M6 12L8 10"
                    stroke="#202224"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 21.9827C10.4465 21.9359 9.51995 21.7626 8.87865 21.1213C8.11027 20.3529 8.01382 19.175 8.00171 17M16 21.9983C18.175 21.9862 19.3529 21.8897 20.1213 21.1213C21 20.2426 21 18.8284 21 16V14V10V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H14C11.1715 2 9.75733 2 8.87865 2.87868C8.11027 3.64706 8.01382 4.82497 8.00171 7"
                    stroke="#202224"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5M3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5"
                    stroke="#202224"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </nav>
        </div>
        <div className="dashboard__informations">
          <div className="dashboard__informations-data">{renderContent()}</div>
        </div>
      </div>
    );
  }
}
