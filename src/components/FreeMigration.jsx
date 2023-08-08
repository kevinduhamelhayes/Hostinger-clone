
import "./styles/freemigration.css"
import { FaStar, FaCheck } from "react-icons/fa"

const FreeMigration = () => {
  return<>
  <div className="freemigration-container">
    <div className="grid-freemigration">
    <div className="freemigration-left">
      <h1 className="freemigration-h1">
        Soluciones de hosting para todos los presupuestos
      </h1>
      <ul className="ul-freemigration">
        <li className="li-freemigration">
          <FaCheck color="#00B090" />
          Registrá un nombre de dominio de forma gratuita.
        </li>
        <li className="li-freemigration">
          <FaCheck color="#00B090" />
          Configurá una dirección de email comercial profesional.
        </li>
        <li className="li-freemigration">
          <FaCheck color="#00B090" />
          Optimizá tu flujo de trabajo con el hosting administrado de WordPress.
        </li>
        <li className="li-freemigration">
          <FaCheck color="#00B090" />
          Publicá páginas web rápidamente con nuestro Creador de sitios web.
        </li>
        
      </ul>
    </div>
    <figure className="freemigration-right">
      <img className="freemigration-img" src="./public/freemigration.webp" alt="" />
    </figure>
    </div>
    <div className="container-freemigration-bottom">
      <div className="cards-freemigration-button">
        <h1 className="h1-freemigration-bottom">
        <FaStar color="#00B090" /> Trustpilot
        </h1>
        <p>
        Tengo conocimientos avanzados para la configuración pero utilizar la guía de Hostinger simplifica y facilita bastante el trabajo.
        </p>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
      </div>
      <div className="cards-freemigration-button">
        <h1 className="h1-freemigration-bottom">
        <FaStar color="#00B090" /> Trustpilot
        </h1>
        <p>
        Tengo conocimientos avanzados para la configuración pero utilizar la guía de Hostinger simplifica y facilita bastante el trabajo.
        </p>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
      </div>
      <div className="cards-freemigration-button">
        <h1 className="h1-freemigration-bottom">
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



export default FreeMigration