import styles from "./ItemListContainer.module.scss"
import Card from "../Card/Card"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const {categoryName} = useParams();

  if(categoryName){
    useEffect(() => {
      fetch("/src/json/products.json")
        .then((res) => res.json())
        .then((data) => setProductos(data.filter(producto => producto.category == categoryName)))
    }, [categoryName])
  } else {
    useEffect(() => {
      fetch("/src/json/products.json")
        .then((res) => res.json())
        .then((data) => setProductos(data))
    }, [categoryName])
  }

  return (
  <div>
    <div className={styles.contenedorGeneralProductos}>
        <div className={styles.contenedorProductos}>
          {
            productos.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))
          }
        </div>
    </div>
  </div>
  )
}

export default ItemListContainer