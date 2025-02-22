import { useEffect, useState } from "react";
import "./Login.scss";
import { loginUsuario } from "../../firebase/authService";
import { Link, Navigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import LoginImage from "../../components/LoginImage/LoginImage";
import Logo from "../../components/Logo/Logo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const user = await loginUsuario(email, password);
      console.log("Usuário logado:", user);
    } catch (error) {
      console.log(error.message);
    }
  }

  if (userLoggedIn === false) {
    return (
      <div className="login">
        <h1>
          <Logo />
        </h1>
        <LoginImage />
        <div className="login__area">
          <div>
            <span>Acesso ao painel</span>
            <form onSubmit={(e) => handleLogin(e)}>
              <Label id="email" text="Email" />
              <Input
                required="true"
                type="email"
                placeholder="email@exemplo.com.br"
                value={email}
                id="email"
                inputState={setEmail}
              />
              <Label id="password" text="Senha" />
              <Input
                required="true"
                type="password"
                placeholder="Sua senha aqui"
                value={password}
                id="password"
                inputState={setPassword}
              />
              <button type="login">Entrar</button>
              <Link to="/recuperar-senha">Esqueci a minha senha</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (userLoggedIn === true) {
    return <Navigate to="/" />;
  }
}
