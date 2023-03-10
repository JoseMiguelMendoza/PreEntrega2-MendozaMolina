import React from 'react'
import styles from "./ImageLogo.module.scss"
import image from "../../assets/ForTrading.png"
const ImageLogo = () => {
  return (
    <img className={styles.imageLogo} src={image} alt="Imagen de logo" />
  )
}

export default ImageLogo;