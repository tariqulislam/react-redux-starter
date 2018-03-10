import React, { Component } from 'react';
import styles from '../asset/App.scss';
import {Route, Link} from 'react-router-dom';
import Home from './Home/container/HomeContainer'
import About from './About'

class App extends Component {
  render() {
    return (
     <div>
        <div className={styles.Appheader}>
            <Link className={styles.AppLink} to="/">Home</Link>
            <Link className={styles.AppLink} to="/about-us">About</Link>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </div>
     </div>
    )
  }
}

export default App
