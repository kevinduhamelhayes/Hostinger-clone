import { FaCheck } from "react-icons/fa"
import "./styles/hero.css"
const Hero = () => {
  return (
    <main className="container-hero">
      <div className="hero-left">
        <h1 className="h1-title-hero">Todo lo que necesitas para crear una pagina web</h1>
        <h2 className="h2-subtitle-hero">hasta 70% de Descuento en Hoisting</h2>
        <ul>
          <li>
            <FaCheck color="#00B090" /> dominio gratis
          </li>
          <li>
            <FaCheck color="#00B090" /> migracion de sitios web gratis
          </li>
          <li>
            <FaCheck color="#00B090"/> atencion al cliente 24/7
          </li>
        </ul>
        <div className="containerPrice">
        <h2 className="h2-hero-in-line">ar$</h2> <h1 className="h1-hero-in-line">1299.00</h1> <h2 className="h2-hero-in-line">/mes</h2>
        </div>
        <button className="ofert-btn">Obtener oferta</button>
      </div>
      <div className="hero-right">
        <figure>
          <img className="img-hero" src="./public/img-hero.webp" alt="" />
        </figure>
      </div>
    </main>
  )
}

export default Hero
