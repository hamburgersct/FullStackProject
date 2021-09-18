import axios from "axios";
import { API_URL } from "../../Constants";

class TodoDataService {

    retrieveAllTodos(name) {
        // console.log("executed service")
        // Here returns an Promise, in the method who calls it, we can define then() to execute other operations to execute
        return axios.get(`${API_URL}/users/${name}/todos`)
    }

    deleteTodos(name, id) {
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`)
    }

    retrieveOneTodo(name, id) {
        return axios.get(`${API_URL}/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo) {
        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo)
    }

    addTodo(name, todo) {
        return axios.post(`${API_URL}/users/${name}/todos`, todo)
    }
}

export default new TodoDataService()