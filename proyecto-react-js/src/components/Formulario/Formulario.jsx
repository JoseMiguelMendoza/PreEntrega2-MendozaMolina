import styles from "./Formulario.module.scss"
import { validateForm } from "../../utils/ValidateForm"
import { useContext, useState } from "react"
import { CartContext } from "../../Contexts/CartContext"
import db from "../../../db/firebase-config"
import { addDoc, collection } from "firebase/firestore"
import Success from "../Success/Success"


const Formulario = () => {
  const {cart, totalCartPrice, emptyCart} = useContext(CartContext)
  const [orderId, setOrderId] = useState({})
  const storeOrder = (e) => {
    e.preventDefault();
    if(validateForm()){
      let nombre = document.querySelector('#inputNombre')
      let apellido = document.querySelector('#inputApellido')
      let telefono = document.querySelector('#inputTelefono')
      let email = document.querySelector('#inputEmail')
      const order = {
        buyer: {
          nombre: nombre.value,
          apellido: apellido.value,
          telefono: telefono.value,
          email: email.value,
        },
        items: cart.map((producto) => ({id: producto.id, nombre: producto.name, precio: producto.price, cantidad: producto.cantidad})),
        total: totalCartPrice()
      }
      const ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, order)
        .then(({ id }) => setOrderId(id))
        emptyCart()
    }
  }
  
  if(orderId.length > 0){
    return <Success orderId={orderId}/>
  }

  return (
    <form className={styles.formContainer}>
        <p className={styles.formTitulo}>Ingresar datos: </p>
        <label className={styles.formEtiquetas}>Nombre:</label>
        <input autoComplete="off" type="text" id="inputNombre" className={styles.input} />
        <label className={styles.formEtiquetas}>Apellido:</label>
        <input autoComplete="off" type="text" id="inputApellido" className={styles.input} />
        <label className={styles.formEtiquetas}>Telefono:</label>
        <input autoComplete="off" type="number" id="inputTelefono" className={styles.input} />
        <label className={styles.formEtiquetas}>Correo:</label>
        <input autoComplete="off" type="email" id="inputEmail" className={styles.input} />
        <label className={styles.formEtiquetas}>Confirmar Correo:</label>
        <input autoComplete="off" type="email" id="inputConfirmEmail" className={styles.input} />
        <div className={styles.buttonForm} >
          <button onClick={(e) => storeOrder(e)}>Generar orden</button>
        </div>
    </form>
  )
}

export default Formulario;