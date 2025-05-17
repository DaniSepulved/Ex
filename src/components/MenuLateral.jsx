import { Link, useNavigate } from "react-router-dom"
import { alertaRedireccion } from "../helpers/funciones"

const MenuLateral = () => {
  let redireccion = useNavigate()

  function cerrarSesion() {
    alertaRedireccion("Cerrando sesión", "/", redireccion)
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Parking<span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: {localStorage.getItem("usuario")}</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/Home">Inicio</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/servicios">Servicios</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/cuenta">Cuenta</Link>
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/contacto">Contacto</Link>
        <button onClick={cerrarSesion} type='button' className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral
