import ItemListContainer from "../ItemListContainer/ItemListContainer"
import styles from "./Home.module.scss"
import image from "../../assets/img-escritorio.webp"

const Home = ({greeting}) => {
  return (
    <div>
      <div className={styles.contenedorTextoBienvenida}>
        <div className={styles.parrafoPosicion}>
          <p className={styles.tituloDeBienvenida}>{greeting}</p>
          <p className={styles.parrafoDeBienvenida}>¡Bienvenido a nuestra tienda en línea ForTrading de artículos electrónicos, portátiles y móviles! Estamos emocionados de ofrecerte una amplia variedad de productos de alta calidad para satisfacer todas tus necesidades tecnológicas. Nuestra tienda en línea está diseñada para proporcionarte una experiencia de compra fácil y conveniente desde la comodidad de tu hogar. Explora nuestra selección de dispositivos electrónicos de última generación, desde portátiles ultraligeros hasta teléfonos móviles inteligentes de última generación. Además, nuestro equipo de atención al cliente está siempre listo para ayudarte con cualquier pregunta o consulta que tengas. ¡Gracias por visitarnos y esperamos que disfrutes tu experiencia de compra con nosotros!</p>
        </div>
        <img src={image} className={styles.imagenBienvenida} alt="Imagen de computadores, celulares y laptop en venta" />
      </div>
      <ItemListContainer />
    </div>
  )
}

export default Home