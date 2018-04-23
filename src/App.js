import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { Home, About } from './routes/routeSplit'
import TopNav from './component/TopNav';


class App extends Component {
  render() {
    return (
     <div>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </Switch>
     </div>
    )
  }
}

export default App
