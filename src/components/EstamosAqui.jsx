import { FaStar, FaCheck } from "react-icons/fa"
import "./styles/estamosaqui.css"

const EstamosAqui = () => {
  return (
    <>
      <div className="estamosaqui-container">
        <div className="grid-estamosaqui">
          <div className="estamosaqui-left">
            <h1 className="estamosaqui-h1">
            Estamos aquí para ayudarte 24/7
            </h1>
            <ul className="ul-estamosaqui">
              <li className="li-estamosaqui">
                <FaCheck color="#00B090" />
                Recibí ayuda de nuestros agentes en cualquier momento mediante el soporte por chat.
              </li>
              <li className="li-estamosaqui">
                <FaCheck color="#00B090" />
                Seguí tutoriales y guías paso a paso en video.
              </li>
              <li className="li-estamosaqui">
                <FaCheck color="#00B090" />
                Ingresá a un amplio banco de conocimientos de tutoriales detallados.
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
              <FaStar color="#000" /> Trustpilot
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
              <FaStar color="#000" /> Trustpilot
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
              <FaStar color="#000" /> Trustpilot
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
