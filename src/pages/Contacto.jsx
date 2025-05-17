// src/pages/Servicios.jsx
import './Contacto.css'            // crea el css si lo necesitas
import MenuLateral from '../components/MenuLateral'

const Contacto = () => {
  return (
    <div className="aplicacion">
      <MenuLateral />

      <div className="aplicacion__contenido">
        <div className="aplicacion__contenido-fondo"></div>

        <main className="aplicacion__principal">
          <div className="contacto">
            <h3>Contacto</h3>

            {/* Ejemplo de listado; cámbialo a lo que necesites */}
            <ul>
              <li>Numero</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Contacto