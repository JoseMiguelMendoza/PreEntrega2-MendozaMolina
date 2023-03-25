import styles from "./Button.module.scss"

const Button = ({texto}) => {
  return (
    <button className={styles.button}>{texto}</button>
  )
}

export default Button