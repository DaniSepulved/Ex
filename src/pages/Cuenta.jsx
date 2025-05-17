import './Cuenta.css'
import MenuLateral from '../components/MenuLateral'

const Cuenta = () => {
  const usuario = localStorage.getItem("usuario")

  return (
    <div className="aplicacion">
      <MenuLateral />
      <div className="aplicacion__contenido">
        <div className="aplicacion__contenido-fondo"></div>
        <main className="aplicacion__principal">
          <div className="cuenta">
            <b>
                <h3>Mi cuenta</h3>
            </b>
            {/* resto del contenido... */}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Cuenta
