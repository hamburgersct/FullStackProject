import React, {Component} from 'react'
import moment from 'moment'
import {Field, Form, Formik, ErrorMessage} from 'formik'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : "initial description",
            targetDate : moment(new Date()).format('MM-DD-YYYY')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
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
                     validateOnChange={false}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label className="form-label">Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label className="form-label">Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
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
        console.log(values)
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