import React from 'react'
import Signup from '../routes/Signup'
import Login from '../routes/Login'

export const WithoutAuthRoute = () => {
    return (
        <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        </Switch>
    )
}

export default WithoutAuthRoute
