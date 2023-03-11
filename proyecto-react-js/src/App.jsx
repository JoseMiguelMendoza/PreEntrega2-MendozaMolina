import './App.css'
import Navbar from "./components/Navbar/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="¡Bienvenidos a ForTrading!" />
    </>
  )
}

export default App
