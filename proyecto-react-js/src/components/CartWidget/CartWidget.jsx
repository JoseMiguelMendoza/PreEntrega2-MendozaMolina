import image from "../../assets/empty-cart.png"
import styles from "./CartWidget.module.scss"
import { CartContext } from "../../Contexts/CartContext"
import { useContext } from "react"
const CardWidget = () => {
  const {cartWidgetTotal} = useContext(CartContext)

  return (
    <div className={styles.icono}>
      <img className={styles.cartImage} src={image} alt="Imagen del carrito" />
      <div className={styles.contenedorNotificacion}>
        <p className={styles.notificacion}>{cartWidgetTotal() || 0}</p>
      </div>
    </div>
  )
}

export default CardWidget;