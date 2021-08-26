import axios from 'axios'
class HelloWorldService {
    executeHelloWorldService() {
        // console.log("executed service")
        // Here returns an Promise, in the method who calls it, we can define then() to execute other operations to execute
        return axios.get("http://localhost:8080/hello-world")
    }

    executeHelloWorldBeanService() {
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()