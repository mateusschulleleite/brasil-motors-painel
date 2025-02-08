import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail  } from "firebase/auth";

export const loginUsuario = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return userCredential.user; // Retorna o usuário logado
  } catch (error) {
    console.error("Erro no login:", error.message);
    throw error;
  }
};

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}