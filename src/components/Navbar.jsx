import { useState } from "react";
import "./styles/navbar.css"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = ({ setDarkMode, darkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="right">
        <ul className="ul-nav-right">
          <li className="li-nav-right"><img className="logo" src="./public/hostinger.svg" alt="" /></li>
          <li className="li-nav-right1">Hostinger</li>
          <li className="li-nav-right">Languages</li>
        </ul>
      </div>
      
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <div className={`left ${mobileMenuOpen ? 'active' : ''}`}>
        {mobileMenuOpen && (
          <button className="mobile-menu-btn close-btn" onClick={toggleMobileMenu}>
            <FaTimes />
          </button>
        )}
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
