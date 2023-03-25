import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"
import Button from "../Button/Button";
import styles from "./ItemDetailContainer.module.scss"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch("/src/json/products.json")
            .then((res) => res.json())
            .then((data) => setProducto(data.find(producto => producto.id == id)))
    }, [id])

    if(!producto) {
        return <Navigate to='/404' />
    }
    
  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.contenedorDetailWithButton}>
        <div className={styles.contenedorDetailsOnly}>
          <div>
            <img className={styles.imageProduct} src={producto.image} alt="Imagen de producto" />
          </div>
          <div>
            <p className={styles.textoDetail}>Nombre: {producto.name}</p>
            <p className={styles.textoDetail}>Precio: {producto.price}</p>
            <p className={styles.textoDetail}>Marca: {producto.brand}</p>
            <p className={styles.textoDetail}>Año: {producto.year}</p>
            <p className={styles.textoDetail}>Categoría: {producto.category}</p>
            <p className={styles.textoDetail}>Descripción: {producto.description}</p>
          </div>
        </div>
        <div className={styles.buttonPosition}>
          <Button texto="Agregar al carrito" />
        </div>

      </div>
    </div>
  )
}

export default ItemDetailContainer