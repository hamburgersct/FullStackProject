import axios from "axios"
import { API_URL } from "../../Constants"

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        
        return axios.get(`${API_URL}/basicauth`, {headers : {authorization : this.createBasicAuthToken(username, password)}})
    }

    executeJwtAuthenticationService(username, password) {
        
        return axios.post(`${API_URL}/authenticate`, {
            username, password
            })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' +  window.btoa(username + ":" + password)
    }

    createJwtToken(token) {
        return 'Bearer ' +  token
    }

    // when user logging in successfully, save the authentication token for the entire application
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }

    // when logging out, remove authentication token in session storage
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }
    // check if user logged in
    isLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        return (user === null) ? false : true
    }
    // return logged in username
    getLoggedInUser() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        return (user == null) ? '' : user
    }

    setupAxiosInterceptors(token) {
        // console.log(basicAuthHeader)
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

// for React component we export the class directly, for helper services we export an instance of the class (an object)
export default new AuthenticationService()