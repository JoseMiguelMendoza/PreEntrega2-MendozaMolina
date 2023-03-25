import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.scss"
import ImageLogo from "../ImageLogo/ImageLogo"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/home' className={styles.navlink}>
        <ImageLogo />
      </NavLink>
      <NavLink to='/category/desktop' className={styles.navlink}>
        <div className={styles.navbarItem}>
          <div className={styles.navbarA}>De escritorio</div>
        </div>
      </NavLink> 
      <NavLink to='/category/mobile-phone' className={styles.navlink}>
        <div className={styles.navbarItem}>
          <div className={styles.navbarA}>Moviles</div>
        </div>
      </NavLink>
      <NavLink to='/category/laptop' className={styles.navlink}>
        <div className={styles.navbarItem}>
          <div className={styles.navbarA}>Portatiles</div>
        </div>
      </NavLink>
      <NavLink to='/contact-us' className={styles.navlink}>
        <div className={styles.navbarItem}>
          <div className={styles.navbarA}>Contact Us</div>
        </div>
      </NavLink>
      <NavLink to='/cart' className={styles.navlink}>
        <div className={styles.carritoCompras}> 
          <div className={styles.cartWidgetA}><CartWidget /></div>
        </div>
      </NavLink>
    </nav>
  )
}

export default Navbar