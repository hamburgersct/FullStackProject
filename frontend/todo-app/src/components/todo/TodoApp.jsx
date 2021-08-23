import React, {Component} from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodoComponent from './ListTodoComponent'
import AuthenticationService from './AuthenticationService'
import AuthenticatedRoute from './AuthenticatedRoute'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <div>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            {/* use authenticaed route to route some pages only for authenticated users */}
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodoComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </div>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An error ocurred. Please contact technique support.</div>
}

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

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">This is a footer.</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are currently logged out.</h1>
                <div className="container">
                    Thank you for using this application.
                </div>
            </>
        )
    }
}

export default TodoApp