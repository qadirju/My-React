import React, {Component} from 'react';

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState(
            (prevState) => ({ count: prevState.count + 1 }),
            () => {
            console.log('Count incremented:', this.state.count);
            }
        );
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
            <h1>Counter: {this.state.count}</h1>
            <button className="bg-red-1000 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.increment}>Increment</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default Counter;