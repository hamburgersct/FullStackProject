import React, {Component} from 'react'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomMessage = this.retrieveWelcomMessage.bind(this)
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome to this page, {this.props.match.params.name}! 
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here for a customized welcome message. 
                    <button onClick={this.retrieveWelcomMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </>
        )
    }

    retrieveWelcomMessage() {
        // Here comes a Promise object, we can use .then() to determine operations following its success, or .catch() to execute after its failure.
        HelloWorldService.executeHelloWorldService()
        .then(response => console.log(response))
    }
}

export default WelcomeComponent