import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import {BrowserRouter as Link} from 'react-router-dom'

// TODO: need to fix the bug that the menu is not dynamic
class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isLoggedIn()
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/hamburgersct" className="navbar-brand">hamburger</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link to="/welcome/hamburgersct" className="nav-link">Home</Link></li>}
                        {isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent