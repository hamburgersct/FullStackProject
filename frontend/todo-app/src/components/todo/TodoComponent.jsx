import React, { Component } from 'react'
import moment from 'moment'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        if (this.state.id == -1) {
            return
        }
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveOneTodo(username, this.state.id)
            .then(
                response => (
                    this.setState({
                        description: response.data.description,
                        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                    })
                )
            )
    }

    render() {
        let description = this.state.description
        let targetDate = this.state.targetDate
        return (
            <div>
                <h1>Update Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            description: description,
                            targetDate: targetDate
                        }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label className="form-label">Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label className="form-label">Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUser()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id == -1) {
            TodoDataService.updateTodo(username, this.state.id, todo).then(
                () => (this.props.history.push('/todos'))
            )
        } else {
            TodoDataService.postTodo(username, todo).then(
                () => (this.props.history.push('/todos'))
            )
        }
    }

    validate(values) {
        let errors = {}
        // check if description is valid
        if (!values.description) {
            errors.description = "You need to add description."
        } else if (values.description.length < 5) {
            errors.description = "Add at least 5-character description."
        }
        // check if date is valid
        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid target date."
        }
        return errors
    }
}

export default TodoComponent