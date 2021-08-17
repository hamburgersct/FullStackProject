import React, {Component} from "react"
import propTypes from "prop-types"
import './CounterButton.css'

class CounterButton extends Component {
    constructor() {
        super()
    }

    // we can change original function into arrow function
    // we can also include inline css in JSX
    render() {
        // const style = {fontSize: "35px", padding: "15px 30px"}
        return (
            <div className="counter">
            <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            {/*<span className="count" 
            //  style={style}
            >{this.state.counter}
            </span>*/}
            </div>
        )
    }
}

// set a default value for props in Counter
CounterButton.defaultProps = {
    by : 1
}
// Type check when passing value to props
CounterButton.propTypes = {
    by : propTypes.number
}

export default CounterButton