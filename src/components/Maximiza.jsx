import { FaStar, FaCheck } from "react-icons/fa"
import "./styles/maximiza.css"

const Maximiza = () => {
  return (
    <>
      <div className="maximiza-container">
        <div className="grid-maximiza">
          <figure className="maximiza-right">
            <img className="maximiza-img" src="./public/maximiza.webp" alt="" />
          </figure>
          <div className="maximiza-left">
            <h1 className="maximiza-h1">
              Soluciones de hosting para todos los presupuestos
            </h1>
            <ul className="ul-maximiza">
              <li className="li-maximiza">
                <FaCheck color="#00B090" />
                Registrá un nombre de dominio de forma gratuita.
              </li>
              <li className="li-maximiza">
                <FaCheck color="#00B090" />
                Configurá una dirección de email comercial profesional.
              </li>
              <li className="li-maximiza">
                <FaCheck color="#00B090" />
                Optimizá tu flujo de trabajo con el hosting administrado de
                WordPress.
              </li>
              <li className="li-maximiza">
                <FaCheck color="#00B090" />
                Publicá páginas web rápidamente con nuestro Creador de sitios
                web.
              </li>
            </ul>
          </div>
        </div>
        <div className="container-maximiza-bottom">
          <div className="cards-maximiza-button">
            <h1 className="h1-maximiza-bottom">
              <FaStar color="#00B090" /> Trustpilot
            </h1>
            <p>
              Tengo conocimientos avanzados para la configuración pero utilizar
              la guía de Hostinger simplifica y facilita bastante el trabajo.
            </p>
            <div className="stars">
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" />{" "}
            </div>
          </div>
          <div className="cards-maximiza-button">
            <h1 className="h1-maximiza-bottom">
              <FaStar color="#00B090" /> Trustpilot
            </h1>
            <p>
              Tengo conocimientos avanzados para la configuración pero utilizar
              la guía de Hostinger simplifica y facilita bastante el trabajo.
            </p>
            <div className="stars">
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
              <FaStar color="#00B090" />{" "}
            </div>
          </div>
          <div className="cards-maximiza-button">
            <h1 className="h1-maximiza-bottom">
              <FaStar color="#00B090" /> Trustpilot
            </h1>
            <p>
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

export default Maximiza
