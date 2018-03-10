import React from 'react'
import PropTypes from 'prop-types'

export const Home = props => {
  console.log('this is home props',props)
  return (
    <div>
      <h1> Home </h1>
      <p> welcome home !</p>
       <h2> { props.showHeader && props.headerText }</h2>
      <button onClick={() => props.showHeaderAtHome()}> Show Header By redux </button>
      <button onClick={()=> props.clearHeaderAtHome() }>Clear Header By redux </button>
      <button onClick={() => props.changeHomePage()}>Go to About Page</button>
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

export default Home
