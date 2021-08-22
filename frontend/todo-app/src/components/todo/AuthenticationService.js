class AuthenticationService {

    // when user logging in successfully, save the authentication token for the entire application
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticatedUser", username)
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
}

// for React component we export the class directly, for helper services we export an instance of the class (an object)
export default new AuthenticationService()