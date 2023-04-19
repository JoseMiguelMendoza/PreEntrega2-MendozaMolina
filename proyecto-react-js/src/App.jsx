import './App.css'
import Navbar from "./components/Navbar/NavBar.jsx"
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Success from './components/Success/Success'


function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />}/>
          <Route path='/home' element={<Home greeting="¡Bienvenido a ForTrading!" />}/>
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order-success' element={<Success />}/>
          <Route path='/404' element={<h2>Not found 404</h2>} />
        </Routes>
    </>
  )
}

export default App
