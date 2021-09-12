import axios from "axios";

class TodoDataService {

    retrieveAllTodos(name) {
        // console.log("executed service")
        // Here returns an Promise, in the method who calls it, we can define then() to execute other operations to execute
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }

    deleteTodos(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }
}

export default new TodoDataService()