import React from 'react'
import styles from '../asset/home.scss'

export const HomeButtons = (props) => {
  return (
    <div>
    <button className={styles.spaceBetweenBtn} onClick={() => props.showHeaderAtHome()}> Show Header By redux </button>
    <button className={styles.spaceBetweenBtn}  onClick={()=> props.clearHeaderAtHome() }>Clear Header By redux </button>
    <button className={styles.spaceBetweenBtn}  onClick={() => props.changeHomePage()}>Go to About Page</button>
    </div>
  )
}

export default HomeButtons
