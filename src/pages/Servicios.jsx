// src/pages/Servicios.jsx
import './Servicios.css'            // crea el css si lo necesitas
import MenuLateral from '../components/MenuLateral'

const Servicios = () => {
  return (
    <div className="aplicacion">
      <MenuLateral />

      <div className="aplicacion__contenido">
        <div className="aplicacion__contenido-fondo"></div>

        <main className="aplicacion__principal">
          <div className="servicios">
            <h3>Servicios</h3>

            {/* Ejemplo de listado; cámbialo a lo que necesites */}
            <ul>
              <li>Reserva de espacio</li>
              <li>Rastreo de paquetes</li>
              <li>Generación de reportes</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Servicios