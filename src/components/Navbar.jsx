import "./styles/navbar.css"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <div className="right">
        <ul className="ul-nav-right">
          <li className="li-nav-right">Logo</li>
          <li className="li-nav-right">Languages</li>
        </ul>
      </div>
      <div className="left">
        <ul className="ul-nav-right">
          <li className="">WordPress</li>
          <li className="">Creador de paginas Web</li>
          <li className="">Hoisting</li>
          <li className="">Pro</li>
          <li className="">Dominios</li>
          <li className="">
            <button className="ingresar">Ingresar</button>

          </li>
          <li>
            <button
              className="btn-darkmode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <MdDarkMode color="var(--dark-color)" size={25} />
              ) : (
                <MdOutlineDarkMode color="var(--dark-color)" size={25} />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
