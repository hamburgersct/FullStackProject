import React, {Component} from 'react'

class ListTodoComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            todos : [
                { id: 1, description: "Learn React on Udemy.", done: false, date: new Date()},
                { id: 2, description: "Create a project with new knowledge.", done: false, date: new Date()},
                { id: 3, description: "Become a master in React JS.", done: false, date: new Date()},
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <table>
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
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.date.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodoComponent