import { useEffect, useState } from "react"
import { Navigate } from "react-router";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
    const [userLoggedIn, setUserLoggedIn] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLoggedIn(true)
              console.log("Usuário está logado:", user);
            } else {
                setUserLoggedIn(false)
              console.log("Nenhum usuário logado.");
            }
          });
    }, [])

    if(userLoggedIn === false) {
        return <Navigate to="/login" />
    }

    if(userLoggedIn === true) {
        return <h1>Bem vindo</h1>
    }
}
