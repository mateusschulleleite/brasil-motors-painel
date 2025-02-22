import { useState } from "react";
import LoginImage from "../../components/LoginImage/LoginImage";
import "./Recovery.scss";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import { Link } from "react-router";
import { resetPassword } from "../../firebase/authService";
import Logo from "../../components/Logo/Logo";

export default function Recovery() {
  const [email, setEmail] = useState("");

  const handleRecovery = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("E-mail de redefinição enviado!");
    } catch (error) {
      console.log("Erro: " + error.message);
    }
  };

  return (
    <div className="recovery">
      <LoginImage />
      <h1><Logo /></h1>
      <div className="recovery__area">
        <div>
          <span>Recuperar acesso</span>
          <form
            onSubmit={(e) => {
              handleRecovery(e);
            }}
          >
            <Label id="email" text="Email" />
            <Input
              required="true"
              type="email"
              placeholder="email@exemplo.com.br"
              value={email}
              id="email"
              inputState={setEmail}
            />
            <button type="login">Recuperar senha</button>
            <Link to="/login">Entrar na minha conta</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
