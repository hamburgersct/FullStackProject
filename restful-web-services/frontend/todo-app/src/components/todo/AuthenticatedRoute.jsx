import React, {Component} from 'react'
import { Redirect, Route } from 'react-router'
import AuthenticationService from './AuthenticationService'

// authenticated route allows only authenticated user to route to specific pages
class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isLoggedIn()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute