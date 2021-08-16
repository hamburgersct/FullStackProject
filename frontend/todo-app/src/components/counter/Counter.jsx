import React, { Component } from "react";
import './Counter.css'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    render() {
        return (
            <div className="counter">
            <button onClick={this.increment}>+1</button>
            <button onClick={this.decrement}>-1</button>
            <span className="count">{this.state.counter}</span>
            </div>
        )
    }

    increment() {
        //console.log("Increment");
        this.setState({
            counter : this.state.counter + 1
        })
    }

    decrement() {
        this.setState({
            counter : this.state.counter - 1
        })
    }
}



export default Counter