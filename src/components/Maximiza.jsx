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
            Maximizá la velocidad del sitio web
            </h1>
            <ul className="ul-maximiza">
              <li className="li-maximiza">
                <FaCheck color="#00B090" />
                Maximizá el rendimiento con la tecnología del servidor web LiteSpeed.
              </li>
              <li className="li-maximiza">
                <FaCheck color="#00B090" />
                Aprovechá el rendimiento optimizado con soluciones de caché avanzadas.
              </li>
              <li className="li-maximiza">
                <FaCheck color="#00B090" />
                Reducí los tiempos de respuesta del sitio web hasta 3 veces con Object Cache para WordPress.
              </li>
              
            </ul>
          </div>
        </div>
        <div className="container-maximiza-bottom">
          <div className="cards-maximiza-button">
            <h1 className="h1-maximiza-bottom">
              <FaStar color="#00B090" /> HOSTING VICTORY
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
              <FaStar color="#00B090" /> Software.lab
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
              <FaStar color="#00B090" /> bitcatcha
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
