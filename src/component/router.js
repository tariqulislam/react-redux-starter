import React from 'react'

export const router = (props) =>  props.isAuthenticate ? <WithAuthScreen /> : <WithOutAuthScreen />

export const WithOutAuthScreen = () => {
    return (
     <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={signup} />
     </Switch>
    )
}

export const WithAuthScreen = () => {
   return (
       <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={About} />
            <Route exact path="/contact" component={contact} />
       </Switch>
   )
}

export default router