import { FaStar, FaCheck } from "react-icons/fa"
import "./styles/estamosaqui.css"

const EstamosAqui = () => {
  return (
    <>
      <div className="estamosaqui-container">
        <div className="grid-estamosaqui">
          <div className="estamosaqui-left">
            <h1 className="estamosaqui-h1">
              Soluciones de hosting para todos los presupuestos
            </h1>
            <ul className="ul-estamosaqui">
              <li className="li-estamosaqui">
                <FaCheck color="#00B090" />
                Registrá un nombre de dominio de forma gratuita.
              </li>
              <li className="li-estamosaqui">
                <FaCheck color="#00B090" />
                Configurá una dirección de email comercial profesional.
              </li>
              <li className="li-estamosaqui">
                <FaCheck color="#00B090" />
                Optimizá tu flujo de trabajo con el hosting administrado de
                WordPress.
              </li>
              <li className="li-estamosaqui">
                <FaCheck color="#00B090" />
                Publicá páginas web rápidamente con nuestro Creador de sitios
                web.
              </li>
            </ul>
          </div>
          <figure className="estamosaqui-right">
            <img
              className="estamosaqui-img"
              src="./public/estamosaqui.webp"
              alt=""
            />
          </figure>
        </div>
        <div className="container-estamosaqui-bottom">
          <div className="cards-estamosaqui-button">
            <h1 className="h1-estamosaqui-bottom">
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
          <div className="cards-estamosaqui-button">
            <h1 className="h1-estamosaqui-bottom">
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
          <div className="cards-estamosaqui-button">
            <h1 className="h1-estamosaqui-bottom">
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

export default EstamosAqui
