import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import CartProvider  from './Contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Aqui ya le agregé el CartProvider, asi no se me olvida.
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>,
)
