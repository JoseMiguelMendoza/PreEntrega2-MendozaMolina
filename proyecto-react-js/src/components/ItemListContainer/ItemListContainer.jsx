import styles from "./ItemListContainer.module.scss"

const ItemListContainer = ({greeting}) => {
  return (
    <div className={styles.contenedorGeneral}>
        <div className={styles.contenedorTexto}>
            <p className={styles.texto}>{greeting}</p>
            <p className={styles.texto}>¡Espero disfruten de una linda experiencia navegando por nuestra página!</p>
        </div>
    </div>
  )
}

export default ItemListContainer