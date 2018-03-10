import React from  'react'

export const Home = props => (
    <div>
        <h1> Home </h1>
        <p> welcome home !</p>
        <button onClick={()=> props.changePage()}>Go to About Page</button>
    </div>
)

export default Home