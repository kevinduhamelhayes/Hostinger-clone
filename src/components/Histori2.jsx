import "./styles/histori2.css"
import { FaStar } from "react-icons/fa"

const Histori2 = () => {
  return (
    <div className="container-histori2">
      <h1 className="histori2-h1">Historias de éxito de Hostinger</h1>
      <div className="grid-histori2">
        <div className="histori2-cart">
          <h1 className="histori2-h1">
            <FaStar color="#673DE6" size={28} /> <FaStar color="#673DE6" size={28} />{" "}
            <FaStar color="#673DE6" size={28} /> <FaStar color="#673DE6" size={28} />{" "}
            <FaStar color="#673DE6" size={28} />
          </h1>
          <p className="histori2-p">
            No tengo demasiada experiencia como para hacer cosas con
            computadoras, pero mi amigo me tranquilizó y me recomendó Hostinger.
            Puedes hacerlo tú mismo y me encanta. Es muy fácil crear un sitio
            web y editarlo también.
          </p>
          <strong className="histori2-strong">leer toda la historia</strong>
          <div className="histori2-names">
            <figure className="histori2-figure">
              <img src="" alt="" className="histori-img" />
            </figure>
            <div className="histori2-names">
              <h1 className="histori2-h1">Nombre Apellido</h1>
              <p className="histori2-p">CEO de la empresa</p>
            </div>
          </div>
        </div>
        <div className="histori2-cart">
          <h1 className="histori2-h1">
            <FaStar color="#673DE6" size={28} /> <FaStar color="#673DE6" size={28} />{" "}
            <FaStar color="#673DE6" size={28} /> <FaStar color="#673DE6" size={28} />{" "}
            <FaStar color="#673DE6" size={28} />{" "}
          </h1>
          <p className="histori2-p">
            Estaba buscando una empresa de hosting que fuera muy intuitiva para
            principiantes y bien configurada para un bien rendimiento.
          </p>
          <strong className="histori2-strong">leer toda la historia</strong>
          <div className="histori2-names">
            <figure className="histori2-figure">
              <img src="" alt="" className="histori-img" />
            </figure>
            <div className="histori2-names">
              <h1 className="histori2-h1">Nombre Apellido</h1>
              <p className="histori2-p">CEO de la empresa</p>
            </div>
          </div>
        </div>
        <div className="histori2-cart">
          <h1 className="histori2-h1">
            <FaStar color="#673DE6" size={28} /> <FaStar color="#673DE6" size={28} />{" "}
            <FaStar color="#673DE6" size={28} /> <FaStar color="#673DE6" size={28} />{" "}
            <FaStar color="#673DE6" size={28} />{" "}
          </h1>
          <p className="histori2-p">
            El instalador de WordPress de un clic de Hostinger me ayuda a
            configurar la plataforma y el sitio web rápidamente.
          </p>
          <strong className="histori2-strong">leer toda la historia</strong>
          <div className="histori2-names">
            <figure className="histori2-figure">
              <img src="" alt="" className="histori-img" />
            </figure>
            <div className="histori2-names">
              <h1 className="histori2-h1">Nombre Apellido</h1>
              <p className="histori2-p">CEO de la empresa</p>
            </div>
          </div>
          
        </div>
        
      </div>
      <button className="ver-mas-historias">ver mas historias de clientes</button>
      <div className="footer-histori2">Se parte de los 2,002,312 propietarios de sitios web</div>
        <button className="btn-histori2">empezar ya</button>
        <p className="garantia-histori2"> garantia de reembolso del dinero de 30 dias</p>
    </div>
  )
}

export default Histori2
