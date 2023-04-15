import styles from "./ItemListContainer.module.scss"
import Card from "../Card/Card"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import db from "../../../db/firebase-config"
import { collection, getDocs } from "firebase/firestore"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  // const {categoryName} = useParams();
  const productosRef = collection(db, "productos")

  const getProductos = async () => {
    const productsCollection = await getDocs(productosRef);
    const productos = productsCollection.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    }))
    setProductos(productos)
  }

  useEffect(() => {
    getProductos()
  }, [])
  
  // A veces me salta, pero luego desaparece.
  if(categoryName){
    useEffect(() => {
      setProductos((product) => product.filter(producto => producto.category === categoryName))
    }, [categoryName])
  } else {
    useEffect(() => {
      setProductos()
    }, [categoryName])
  }


  // Condicional que si funciona con respecto a las categorias, pero se usa mi json anterior.
  // if(categoryName){
  //   useEffect(() => {
  //     fetch("/src/json/products.json")
  //       .then((res) => res.json())
  //       .then((data) => setProductos(data.filter(producto => producto.category == categoryName)))
  //   }, [categoryName])
  // } else {
  //   useEffect(() => {
  //     fetch("/src/json/products.json")
  //       .then((res) => res.json())
  //       .then((data) => setProductos(data))
  //   }, [categoryName])
  // }

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