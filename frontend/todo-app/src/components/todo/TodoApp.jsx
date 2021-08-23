import React, {Component} from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodoComponent from './ListTodoComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
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


export default TodoApp