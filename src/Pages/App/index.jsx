import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import '/src/App.css'
import Navbar from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import Clothes from '../Clothes'
import Electronics from '../Electronics'
import Jewelery from '../Jewelery'

const AppRoutes = () => {

  let routes = useRoutes([

    { path: '/', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount /> },
    { path: '/MyOrder', element: <MyOrder /> },
    { path: '/MyOrders', element: <MyOrders /> },
    { path: '/MyOrders/last', element: <MyOrder /> },
    { path: '/MyOrders/:id', element: <MyOrder /> },
    { path: '/SingIn', element: <SingIn /> },
    { path: '/clothes', element: <Clothes /> },
    { path: '/electronics', element: <Electronics /> },
    { path: '/jewelery', element: <Jewelery /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
