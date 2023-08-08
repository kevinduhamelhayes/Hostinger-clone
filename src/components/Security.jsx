import { FaStar, FaCheck } from "react-icons/fa"
import "./styles/security.css"

const Security = () => {
  return (
    <>
      <div className="security-container">
        <div className="grid-security">
        <figure className="security-right">
            <img className="security-img" src="./public/security.webp" alt="" />
          </figure>
          <div className="security-left">
            <h1 className="security-h1">
              Soluciones de hosting para todos los presupuestos
            </h1>
            <ul className="ul-security">
              <li className="li-security">
                <FaCheck color="#00B090" />
                Registrá un nombre de dominio de forma gratuita.
              </li>
              <li className="li-security">
                <FaCheck color="#00B090" />
                Configurá una dirección de email comercial profesional.
              </li>
              <li className="li-security">
                <FaCheck color="#00B090" />
                Optimizá tu flujo de trabajo con el hosting administrado de
                WordPress.
              </li>
              <li className="li-security">
                <FaCheck color="#00B090" />
                Publicá páginas web rápidamente con nuestro Creador de sitios
                web.
              </li>
            </ul>
          </div>
          
        </div>
        <div className="container-security-bottom">
          <div className="cards-security-button">
            <h1 className="h1-security-bottom">
              <FaStar color="#00B090" /> Trustpilot
            </h1>
            <p className="p-purpple">
              Tengo conocimientos avanzados para la configuración pero utilizar
              la guía de Hostinger simplifica y facilita bastante el trabajo.
            </p>
            <div className="stars">
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" />{" "}
            </div>
          </div>
          <div className="cards-security-button">
            <h1 className="h1-security-bottom">
              <FaStar color="#00B090" /> Trustpilot
            </h1>
            <p className="p-purpple">
              Tengo conocimientos avanzados para la configuración pero utilizar
              la guía de Hostinger simplifica y facilita bastante el trabajo.
            </p>
            <div className="stars">
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" />{" "}
            </div>
          </div>
          <div className="cards-security-button">
            <h1 className="h1-security-bottom">
              <FaStar color="#00B090" /> Trustpilot
            </h1>
            <p className="p-purpple">
              Tengo conocimientos avanzados para la configuración pero utilizar
              la guía de Hostinger simplifica y facilita bastante el trabajo.
            </p>
            <div className="stars">
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Security
