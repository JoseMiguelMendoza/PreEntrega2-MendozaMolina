import { Link } from "react-router-dom"
import Button from "../Button/Button"
import styles from "./Card.module.scss"

const Card = ({producto}) => {
  return (
    <div className={styles.contenedorCardProducto}>
        <img className={styles.imagenProducto} src={producto.image} alt="Imagen de producto" />
        <p className={styles.texto}>Nombre: {producto.name}</p>
        <p className={styles.texto}>Precio: ${producto.price}</p>
        <Link to={`/item/${producto.id}`}>
          <Button texto="Ver detalles" />
        </Link>
    </div>
  )
}

export default Card