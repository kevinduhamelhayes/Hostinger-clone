import React from "react"
import "./styles/hero.css"
const Hero = () => {
  return (
    <main className="container-hero">
      <div className="hero-left">
        <h1>Todo lo que necesitas para crear una pagina web</h1>
        <h2>hasta 70% de Descuento en Hoisting</h2>
        <ul>
          <li>dominio gratis</li>
          <li>migracion de sitios web gratis</li>
          <li>atencion al cliente 24/7</li>
        </ul>
        <h2>ar$</h2> <h1>1299.00</h1> <h2>/mes</h2>
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
