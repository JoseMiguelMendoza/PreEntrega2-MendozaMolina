import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
        <li className={styles.navbarItem}>Home</li>
        <li className={styles.navbarItem}>About Us</li>
        <li className={styles.navbarItem}>Marketplace</li>
        <li className={styles.navbarItem}>Discounts</li>
        <li className={styles.navbarItem}>Contact Us</li>
    </ul>
  )
}

export default Navbar