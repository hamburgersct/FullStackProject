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

    retrieveOneTodo(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo) {
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }

    addTodo(name, todo) {
        return axios.post(`http://localhost:8080/users/${name}/todos`, todo)
    }
}

export default new TodoDataService()