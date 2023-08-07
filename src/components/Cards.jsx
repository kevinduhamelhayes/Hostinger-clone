import { FaCheck } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import "./styles/cards.css"
import React from "react"

const Cards = () => {
  return (
    <div className="container-ppal">
      <div className="container-cards">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Premium</h1>
            <h2 className="card-subtitle">
              El paquete perfecto para webs personales
            </h2>
            <div className="price-ahorro">
              <h2 className="price-tach">ars4300</h2>
              <span className="ahorro">ahorra70%</span>
            </div>
          </div>
          <div className="price-container">
            <h2 className="inline">ar$</h2>
            <h1 className="price-inline">1299,00</h1>
            <h2 className="inline">/mes</h2>
          </div>
          <h2 className="twofrees">+2 meses gratis</h2>
          <button className="car">add to car</button>
          <div className="ppal-funtions">
            <h2 className="price-tach1">AR$2299.00 /mes al renovar</h2>
            <hr />

            <ul className="funtions">
              <h2 className="funtions-h2">Funciones principales</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                rendimiento standar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                100 sitios web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                100GB de SSD
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Copias de Seguridad Semanales
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                ssl ilimitado gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                ancho de banda ilimitado
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                EMAIL gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                dominio gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                CDN gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                IP dedicada
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">WordPress hosting gestionado</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                Optimización de WooCommerce básica
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Migración automática y gratis de sitios web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Instalación de WordPress con 1 clic gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Aceleración de WordPress (LiteSpeed)
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Actualizaciones automáticas WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Escáner de vulnerabilidades de WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                WordPress Multisite
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                WP-CLI y SSH
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                WordPress staging
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                Object Cache para WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                Copia de seguridad bajo demanda
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Creador de sitios web sin código</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Creador de sitios web de arrastrar y soltar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Creación de sitios web con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                +200 plantillas creadas por diseñadores
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Google Analytics integrado
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Integraciones de marketing
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                rCreador de logos con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Herramienta de redacción con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Mapas de calor con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Optimizaciones SEO con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Herramientas de eCommerce
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Comisiones de transaccion del 0%
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                +20 metodos de pago
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Seguridad</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Protección DDoS estándar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Firewall de aplicaciones web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Nameservers protegidos por Cloudflare
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Escáner de malware
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Administrador de acceso seguro
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Protección de privacidad de dominio WHOIS gratis (valor: AR$
                4.499,00)
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Servicios y Soporte</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Garantía de reembolso del dinero por 30 días
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Garantía de uptime: 99.9 %
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Centros de datos globales
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Atención 24/7
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Asistencia prioritaria
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Detalles Tecnicos</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                100 subdominios
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Acceso a git
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Distintas versiones de PHP
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Acceso SSH
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Cuentas FTP ilimitadas
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Bases de datos MySQL ilimitadas
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Premium</h1>
            <h2 className="card-subtitle">
              El paquete perfecto para webs personales
            </h2>
            <div className="price-ahorro">
              <h2 className="price-tach">ars4300</h2>
              <span className="ahorro">ahorra70%</span>
            </div>
          </div>
          <div className="price-container">
            <h2 className="inline">ar$</h2>
            <h1 className="price-inline">1299,00</h1>
            <h2 className="inline">/mes</h2>
          </div>
          <h2 className="twofrees">+2 meses gratis</h2>
          <button className="car">add to car</button>
          <div className="ppal-funtions">
            <h2 className="price-tach1">AR$2299.00 /mes al renovar</h2>
            <hr />

            <ul className="funtions">
              <h2 className="funtions-h2">Funciones principales</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                rendimiento standar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                100 sitios web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                100GB de SSD
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Copias de Seguridad Semanales
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                ssl ilimitado gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                ancho de banda ilimitado
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                EMAIL gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                dominio gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                CDN gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                IP dedicada
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">WordPress hosting gestionado</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                Optimización de WooCommerce básica
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Migración automática y gratis de sitios web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Instalación de WordPress con 1 clic gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Aceleración de WordPress (LiteSpeed)
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Actualizaciones automáticas WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Escáner de vulnerabilidades de WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                WordPress Multisite
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                WP-CLI y SSH
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                WordPress staging
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                Object Cache para WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                Copia de seguridad bajo demanda
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Creador de sitios web sin código</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Creador de sitios web de arrastrar y soltar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Creación de sitios web con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                +200 plantillas creadas por diseñadores
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Google Analytics integrado
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Integraciones de marketing
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                rCreador de logos con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Herramienta de redacción con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Mapas de calor con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Optimizaciones SEO con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Herramientas de eCommerce
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Comisiones de transaccion del 0%
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                +20 metodos de pago
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Seguridad</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Protección DDoS estándar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Firewall de aplicaciones web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Nameservers protegidos por Cloudflare
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Escáner de malware
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Administrador de acceso seguro
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Protección de privacidad de dominio WHOIS gratis (valor: AR$
                4.499,00)
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Servicios y Soporte</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Garantía de reembolso del dinero por 30 días
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Garantía de uptime: 99.9 %
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Centros de datos globales
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Atención 24/7
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Asistencia prioritaria
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Detalles Tecnicos</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                100 subdominios
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Acceso a git
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Distintas versiones de PHP
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Acceso SSH
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Cuentas FTP ilimitadas
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Bases de datos MySQL ilimitadas
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Premium</h1>
            <h2 className="card-subtitle">
              El paquete perfecto para webs personales
            </h2>
            <div className="price-ahorro">
              <h2 className="price-tach">ars4300</h2>
              <span className="ahorro">ahorra70%</span>
            </div>
          </div>
          <div className="price-container">
            <h2 className="inline">ar$</h2>
            <h1 className="price-inline">1299,00</h1>
            <h2 className="inline">/mes</h2>
          </div>
          <h2 className="twofrees">+2 meses gratis</h2>
          <button className="car">add to car</button>
          <div className="ppal-funtions">
            <h2 className="price-tach1">AR$2299.00 /mes al renovar</h2>
            <hr />

            <ul className="funtions">
              <h2 className="funtions-h2">Funciones principales</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                rendimiento standar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                100 sitios web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                100GB de SSD
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Copias de Seguridad Semanales
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                ssl ilimitado gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                ancho de banda ilimitado
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                EMAIL gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                dominio gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                CDN gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                IP dedicada
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">WordPress hosting gestionado</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="orange" />
                Optimización de WooCommerce básica
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Migración automática y gratis de sitios web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Instalación de WordPress con 1 clic gratis
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Aceleración de WordPress (LiteSpeed)
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Actualizaciones automáticas WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Escáner de vulnerabilidades de WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                WordPress Multisite
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                WP-CLI y SSH
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                WordPress staging
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                Object Cache para WordPress
              </li>
              <li className="li-funtions">
                {" "}
                <FaX color="red" />
                Copia de seguridad bajo demanda
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Creador de sitios web sin código</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Creador de sitios web de arrastrar y soltar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Creación de sitios web con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                +200 plantillas creadas por diseñadores
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Google Analytics integrado
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Integraciones de marketing
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                rCreador de logos con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Herramienta de redacción con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Mapas de calor con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Optimizaciones SEO con IA
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Herramientas de eCommerce
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Comisiones de transaccion del 0%
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                +20 metodos de pago
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Seguridad</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Protección DDoS estándar
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Firewall de aplicaciones web
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Nameservers protegidos por Cloudflare
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Escáner de malware
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Administrador de acceso seguro
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Protección de privacidad de dominio WHOIS gratis (valor: AR$
                4.499,00)
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Servicios y Soporte</h2>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Garantía de reembolso del dinero por 30 días
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Garantía de uptime: 99.9 %
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Centros de datos globales
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Atención 24/7
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Asistencia prioritaria
              </li>
            </ul>
            <ul className="funtions">
              <h2 className="funtions-h2">Detalles Tecnicos</h2>

              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                100 subdominios
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Acceso a git
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Distintas versiones de PHP
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Acceso SSH
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Cuentas FTP ilimitadas
              </li>
              <li className="li-funtions">
                {" "}
                <FaCheck color="green" />
                Bases de datos MySQL ilimitadas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
