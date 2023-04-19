import styles from "./ItemListContainer.module.scss"
import Card from "../Card/Card"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import db from "../../../db/firebase-config"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const {categoryName} = useParams();
  const productosRef = categoryName ? query(collection(db, "productos"), where("category", "==", categoryName)): collection(db, "productos")



  const getProductos = async () => {
    const productsCollection = await getDocs(productosRef);
    const productos = productsCollection.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    }))
    setProductos(productos)
  }


  useEffect(() => {
    getProductos()
  }, [categoryName])

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