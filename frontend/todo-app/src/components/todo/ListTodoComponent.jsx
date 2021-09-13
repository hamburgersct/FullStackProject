import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodoComponent extends Component{
    constructor(props) {
        super(props)
        // console.log('constructor')
        this.state = {
            todos : [],
            message : null
        }
        // binding
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount() {
        this.refreshTodos()
    }

    refreshTodos() {
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
        // console.log('render')
        return (
            <div>
                <h1>Todo List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD').toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-primary" onClick={() => this.updateTodoClicked(todo.id)}>update</button></td>
                                            <td><button className="btn btn-secondary" onClick={() => this.deleteTodoClicked(todo.id)}>delete</button></td>
                                        </tr>
                                        // all attributes' names must match their names in backend data
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.deleteTodos(username, id)
         .then (
             response => { 
                this.setState({message : `Deleted the Todo No.${id} successfully.`})
                // here to refresh the page after delete a todo
                this.refreshTodos()
                }
         )
        // console.log(username + " " + id)
    }

    updateTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUser()
        // console.log("update " + id)
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked() {
        this.props.history.push('/todos/-1')
    }
}

export default ListTodoComponent