import React, { Component } from 'react';
import '../asset/App.css';
import { Route, Link} from 'react-router-dom';
import Home from './Home/container/HomeContainer'
import About from './About'

class App extends Component {
  render() {
    return (
     <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
     </div>
    )
  }
}

export default App
