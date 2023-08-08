
import "./styles/solutions.css"
import { FaStar, FaCheck } from "react-icons/fa"

const Solutions = () => {
  return<>
  <div className="solutions-container">
    <div className="grid-solutions">
    <div className="solutions-left">
      <h1 className="solutions-h1">
        Soluciones de hosting para todos los presupuestos
      </h1>
      <ul className="ul-solutions">
        <li className="li-solutions">
          <FaCheck color="#00B090" />
          Registrá un nombre de dominio de forma gratuita.
        </li>
        <li className="li-solutions">
          <FaCheck color="#00B090" />
          Configurá una dirección de email comercial profesional.
        </li>
        <li className="li-solutions">
          <FaCheck color="#00B090" />
          Optimizá tu flujo de trabajo con el hosting administrado de WordPress.
        </li>
        <li className="li-solutions">
          <FaCheck color="#00B090" />
          Publicá páginas web rápidamente con nuestro Creador de sitios web.
        </li>
        
      </ul>
    </div>
    <figure className="solutions-right">
      <img className="solutions-img" src="./public/solutions.webp" alt="" />
    </figure>
    </div>
    <div className="container-solutions-bottom">
      <div className="cards-solutions-button">
        <h1 className="h1-solutions-bottom">
        <FaStar color="#00B090" /> Trustpilot
        </h1>
        <p>
        Tengo conocimientos avanzados para la configuración pero utilizar la guía de Hostinger simplifica y facilita bastante el trabajo.
        </p>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
      </div>
      <div className="cards-solutions-button">
        <h1 className="h1-solutions-bottom">
        <FaStar color="#00B090" /> Trustpilot
        </h1>
        <p>
        Tengo conocimientos avanzados para la configuración pero utilizar la guía de Hostinger simplifica y facilita bastante el trabajo.
        </p>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
      </div>
      <div className="cards-solutions-button">
        <h1 className="h1-solutions-bottom">
        <FaStar color="#00B090" /> Trustpilot
        </h1>
        <p>
        Tengo conocimientos avanzados para la configuración pero utilizar la guía de Hostinger simplifica y facilita bastante el trabajo.
        </p>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Solutions
