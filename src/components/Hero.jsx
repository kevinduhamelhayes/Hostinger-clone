import { FaCheck } from "react-icons/fa"
import "./styles/hero.css"

const Hero = () => {
  return (
    <main className="hero-container">
      <div className="hero-grid">
        <div className="hero-left">
          <h1 className="hero-h1">Todo lo que necesitas para crear una pagina web</h1>
          <p className="hero-p">Hasta 70% de Descuento en Hosting con dominio gratis, migración de sitios web gratis y atención al cliente 24/7</p>
          <ul className="hero-features">
            <li>
              <FaCheck color="#00B090" /> Dominio gratis
            </li>
            <li>
              <FaCheck color="#00B090" /> Migración de sitios web gratis
            </li>
            <li>
              <FaCheck color="#00B090"/> Atención al cliente 24/7
            </li>
          </ul>
          <div className="price-container">
            <span className="price-currency">AR$</span>
            <span className="price-amount">1299.00</span>
            <span className="price-period">/mes</span>
          </div>
          <button className="hero-button">Obtener oferta</button>
        </div>
        <div className="hero-right">
          <img className="hero-img" src="/img-hero.webp" alt="Ilustración de hosting web" />
        </div>
      </div>
    </main>
  )
}

export default Hero
