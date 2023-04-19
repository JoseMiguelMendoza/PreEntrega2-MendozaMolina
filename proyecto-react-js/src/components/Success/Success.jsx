import { Link } from "react-router-dom"
import styles from "./Success.module.scss"

const Success = ({orderId}) => {
    return (
            <div className={styles.successBoxContainer}>
                <div className={styles.successBox}>
                    <h1 className={styles.letterStyle}>Orden generada</h1>
                    <p className={styles.letterStyle}>Aquí esta su ID de confirmación: {orderId}</p>
                    <Link to='/home'><button>Seguir comprando</button></Link>
                </div>
            </div>
    )
}

export default Success