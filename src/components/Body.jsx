
import "./styles/body.css"
import { FaStar } from "react-icons/fa"
const Body = () => {
  return (
    <main className="main">
      <div className="first">
        <h1 className="title-puntuation">
          <FaStar color="#00B090" /> Truspilot
        </h1>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
        <span className="subtitle-puntiation">TrustScore</span>{" "}
        <strong className="strong-puntuation">4.7 | 18690</strong>
        <span className="subtitle-puntiation"> opiniones</span>
      </div>
      <div className="first">
        <h1 className="title-puntuation">
          Google
        </h1>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
        <span className="subtitle-puntiation">TrustScore</span>{" "}
        <strong className="strong-puntuation">4.7 | 18690</strong>
        <span className="subtitle-puntiation"> opiniones</span>
      </div>
      <div className="first">
        <h1 className="title-puntuation">
          HotAdvice
        </h1>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
        <span className="subtitle-puntiation">TrustScore</span>{" "}
        <strong className="strong-puntuation">4.7 | 18690</strong>
        <span className="subtitle-puntiation"> opiniones</span>
      </div>
      <div className="first">
        <h1 className="title-puntuation">
          <FaStar color="#00B090" /> wpbeginner
        </h1>
        <div className="stars">
          <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" /> <FaStar color="#00B090" />{" "}
        </div>
        <span className="subtitle-puntiation">TrustScore</span>{" "}
        <strong className="strong-puntuation">4.7 | 18690</strong>
        <span className="subtitle-puntiation"> opiniones</span>
      </div>
    </main>
  )
}

export default Body
