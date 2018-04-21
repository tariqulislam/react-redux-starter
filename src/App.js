import React, { Component } from 'react';
import styles from './asset/App.scss';
import {Route, Link} from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'


class App extends Component {
  render() {
    return (
     <div>
        <div className={styles.Appheader}>
            <Link className={styles.AppLink} to="/">About</Link>
            <Link className={styles.AppLink} to="/home">Home</Link>
        </div>
        <div>
          <Route exact path="/" component={About} />
          <Route exact path="/home" component={Home} />
        </div>
     </div>
    )
  }
}

export default App
