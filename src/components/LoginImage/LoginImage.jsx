import image from './fundo-login.webp';
import './LoginImage.scss'

export default function LoginImage() {
  return (
    <div className="login__image">
      <img src={image} alt="Imagem de carro" />
      <span>
        <strong>Gerencie</strong>
        <br></br> seu estoque.
      </span>
    </div>
  );
}
