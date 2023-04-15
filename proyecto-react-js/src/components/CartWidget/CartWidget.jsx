import image from "../../assets/empty-cart.png"
import styles from "./CartWidget.module.scss"
const CardWidget = () => {
  return (
    <div className={styles.icono}>
      <img className={styles.cartImage} src={image} alt="Imagen del carrito" />
      <div className={styles.contenedorNotificacion}>
        <p className={styles.notificacion}>0</p>
      </div>
    </div>
  )
}

export default CardWidget;