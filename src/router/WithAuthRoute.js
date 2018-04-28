import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Home, About, Contact } from '../routes/routeSplit'

export const WithAuthRoute = (props) => {
   return (
       <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
       </Switch>
   )
}

export default WithAuthRoute