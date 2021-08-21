import React, {Component} from 'react'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "hamburgersct",
            password : "",
            hasLoginFailed : false,
            showSuccessMessage : false,
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    render() {
        return(
            <div>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div>Login Failed</div>}
                {/*<ShowSuccessCredentials showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>Login Successfully</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value)
    //     this.setState({username : event.target.value})
    // }

    // handlePasswordChange(event) {
    //     this.setState({password : event.target.value})
    // }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loginClicked() {
        if (this.state.username === "hamburgersct" && this.state.password === "dummy") {
            // this.setState({showSuccessMessage : true})
            // this.setState({hasLoginFailed : false})
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({showSuccessMessage : false})
            this.setState({hasLoginFailed : true})
        }
        console.log(this.state)
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials!</div>
//     }
//     return null
// }

// function ShowSuccessCredentials(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successfully</div>
//     }
//     return null
// }

export default LoginComponent