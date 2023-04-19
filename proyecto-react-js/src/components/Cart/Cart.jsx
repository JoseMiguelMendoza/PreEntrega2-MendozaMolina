import Checkout from "../Checkout/Checkout"
import styles from "./Cart.module.scss"
import Formulario from "../Formulario/Formulario"


const Cart = () => {

  return (
        <div className={styles.cartContainer}>
            <div>
                <Formulario />
            </div>
            <div>
                <Checkout />
            </div>
        </div>
  )
}

export default Cart