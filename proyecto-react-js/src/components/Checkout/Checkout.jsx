import image from "../../assets/trash-can.png"
import { CartContext } from "../../Contexts/CartContext"
import styles from "./Checkout.module.scss"
import { useContext } from "react"


const Checkout = () => {
  const {cart, removeItemCart, emptyCart, totalCartPrice} = useContext(CartContext)
  return (
    <>
      <table className={styles.checkoutItemTable}>
        <thead className={`${styles.checkoutTable} ${styles.borderBottom} ${styles.backgroundTable}`}>
          <tr className={styles.filaTabla}>
            <th className={styles.estiloTexto}>Imagen</th>
            <th className={styles.estiloTexto}>Cantidad</th>
            <th className={styles.estiloTexto}>Nombre</th>
            <th className={styles.estiloTexto}>Precio</th>
            <th className={styles.estiloTexto}>Sub-precio</th>
            <th className={styles.estiloTexto}>-</th>
          </tr>
        </thead>
        <tbody className={styles.checkoutTable}>
        {
          cart.map((producto) => (
            <tr key={producto.id} className={styles.filaTabla}>
              <td><img className={styles.imageProduct} src={producto.image} alt={producto.name} /></td>
              <td className={styles.estiloTexto}>{producto.cantidad}</td>
              <td className={styles.estiloTexto}>{producto.name}</td>
              <td className={styles.estiloTexto}>{producto.price}</td>
              <td className={styles.estiloTexto}>{producto.cantidad * producto.price}</td>
              <td><img className={styles.iconEraseItem} onClick={() => removeItemCart(producto.id)} src={image} alt="Icono de eliminar item" /></td>
            </tr>
              ))
            }
        </tbody>
        <tfoot className={`${styles.borderTop} ${styles.backgroundTable}`}>
          <tr>
            <td className={`${styles.estiloTexto} ${styles.marginText}`}>Total: {totalCartPrice()}</td>
          </tr>
        </tfoot>
      </table>
      <button className={styles.buttonEmptyCart} onClick={() => emptyCart()}>Vaciar carrito</button>
    </>
  )
}

export default Checkout