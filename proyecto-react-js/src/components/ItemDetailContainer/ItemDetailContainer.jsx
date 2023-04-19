import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from "./ItemDetailContainer.module.scss"
import db from "../../../db/firebase-config";
import { doc, getDoc} from "firebase/firestore";
import { CartContext } from "../../Contexts/CartContext";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [counter, setCounter] = useState(1)
    const {addToCart} = useContext(CartContext)
    const { id } = useParams();
    
    const getProduct = async () => {
      const refDocument = doc(db,"productos", id)
      const producto = await getDoc(refDocument)
      setProducto({...producto.data(), id: producto.id})
    }
    
    useEffect(() => {
      getProduct()
    }, [id]);

  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.contenedorDetailWithButton}>
        <div className={styles.contenedorDetailsOnly}>
          <div>
            <img className={styles.imageProduct} src={producto.image} alt="Imagen de producto" />
          </div>
          <div>
            <p className={styles.textoDetail}>Nombre: {producto.name}</p>
            <p className={styles.textoDetail}>Precio: ${producto.price}</p>
            <p className={styles.textoDetail}>Marca: {producto.brand}</p>
            <p className={styles.textoDetail}>Año: {producto.year}</p>
            <p className={styles.textoDetail}>Categoría: {producto.category}</p>
            <p className={styles.textoDetail}>Descripción: {producto.description}</p>
            <ItemQuantitySelector counter={counter} setCounter={setCounter} />
          </div>
        </div>
        <div className={styles.buttonPosition}>
        <button onClick={() => addToCart({...producto, cantidad: counter})}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer