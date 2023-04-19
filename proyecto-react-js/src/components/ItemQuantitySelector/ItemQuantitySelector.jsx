import styles from "./ItemQuantitySelector.module.scss"

const ItemQuantitySelector = ({counter, setCounter}) => {

  function restarCantidad(){
    setCounter(counter - 1)
    if(counter == 1 ){
      setCounter(1)
    }
  }
  
  function sumarCantidad(){ 
    setCounter(counter + 1)
  }
  return (
    <div className={styles.counterBox}>
        <p className={styles.textoDetail}>Cantidad: </p> 
        <button className={styles.shortButtons} onClick={restarCantidad}>-</button>
        <p className={styles.textoDetail}>{counter}</p>
        <button className={styles.shortButtons} onClick={sumarCantidad}>+</button>
  </div> 
  )
}

export default ItemQuantitySelector