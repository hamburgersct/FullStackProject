import axios from "axios"

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        
        return axios.get("http://localhost:8080/basicauth", {headers : {authorization : this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' +  window.btoa(username + ":" + password)
    }

    // when user logging in successfully, save the authentication token for the entire application
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticatedUser", username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }
    // when logging out, remove authentication token in session storage
    logout() {
        sessionStorage.removeItem("authenticatedUser")
    }
    // check if user logged in
    isLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser")
        return (user === null) ? false : true
    }
    // return logged in username
    getLoggedInUser() {
        let user = sessionStorage.getItem("authenticatedUser")
        return (user == null) ? '' : user
    }

    setupAxiosInterceptors(basicAuthHeader) {
        // console.log(basicAuthHeader)
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

// for React component we export the class directly, for helper services we export an instance of the class (an object)
export default new AuthenticationService()