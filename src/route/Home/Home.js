import React from 'react'
import PropTypes from 'prop-types'
import styles from './asset/home.scss'
import HomeButtons from './component/HomeButtons'

export const Home = props => {
  console.log('this is home props',props)
  return (
    <div className={styles.ComponentAlign }>
      <h1> Home </h1>
      <p> welcome home !</p>
       <h2> { props.showHeader && props.headerText }</h2>
       <HomeButtons {...props} />
    </div>
  )
}

Home.propTypes = {
  changeHomePage: PropTypes.func,
  showHeader: PropTypes.bool,
  headerText: PropTypes.string,
  showHeaderAtHome: PropTypes.func,
  clearHeaderAtHome: PropTypes.func
}

export default  Home
