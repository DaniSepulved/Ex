import Home from '../Home'
import Login from '../pages/Login'
import Cuenta from '../pages/Cuenta'
import Servicios from '../pages/Servicios'
import Contacto from '../pages/Contacto'

export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/cuenta',
        element: <Cuenta />
    },
    {
        path: '/servicios',
        element: <Servicios />
    },
    {
        path: '/contacto',
        element: <Contacto />
    }
]