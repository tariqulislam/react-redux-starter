import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { Home, About } from './routes/routeSplit'
import TopNav from './component/TopNav';


class App extends Component {
  render() {
    return (
     <div>
        {
          <TopNav />
        }
        <div>
          <Route exact path="/" component={About} />
          <Route exact path="/home" component={Home} />
        </div>
     </div>
    )
  }
}

export default App
