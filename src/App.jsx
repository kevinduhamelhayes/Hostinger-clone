import { useState } from "react"
import Body from "./components/Body"
import Cards from "./components/Cards"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Historys from "./components/Historys"
import Solutions from "./components/Solutions"
import Maximiza from "./components/Maximiza"
import EstamosAqui from "./components/EstamosAqui"
import Security from "./components/Security"
function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Hero />
      <Body />
      <Cards />
      <Historys />
      <Solutions />
      <Maximiza />
      <EstamosAqui />
      <Security />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
