import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.scss"
import ImageLogo from "../ImageLogo/ImageLogo"

const Navbar = () => {
  return (
    <>
      <ul className={styles.navbar}>
          <li><ImageLogo /></li>
          <li className={styles.navbarItem}><a className={styles.navbarA} href="#">Home</a></li>
          <li className={styles.navbarItem}><a className={styles.navbarA} href="#">About Us</a></li>
          <li className={styles.navbarItem}><a className={styles.navbarA} href="#">Marketplace</a></li>
          <li className={styles.navbarItem}><a className={styles.navbarA} href="#">Discounts</a></li>
          <li className={styles.navbarItem}><a className={styles.navbarA} href="#">Contact Us</a></li>
          <li className={styles.carritoCompras}> 
            <a className={styles.cartWidgetA} href="#"><CartWidget /></a>
          </li>
      </ul>
    </>
  )
}

export default Navbar