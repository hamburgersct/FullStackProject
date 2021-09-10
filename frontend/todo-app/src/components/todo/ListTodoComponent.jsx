import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodoComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            todos : []
        }
    }

    componentDidMount() {
        // this method is called immediately after the component is mounted
        // here is the right place to load data from a remote endpoint
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveAllTodos(username)
            .then(
                // response => console.log(response)
                response => {
                    this.setState ({todos : response.data})
                }
            )
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                        // all attributes' names must match their names in backend data
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent