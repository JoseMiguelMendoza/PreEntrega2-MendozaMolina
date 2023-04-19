import React from 'react'
import styles from "./Spinner.module.scss"

const Spinner = () => {
    return (
        <div className={styles.loader}>
            <div className={`${styles.loaderCube} ${styles.loaderCubeColor}`}></div>
            <div className={`${styles.loaderCube} ${styles.loaderCubeGlowing}`}></div>
        </div>
    )
}

export default Spinner