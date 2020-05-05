import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count:0,
    };
    
    handleIncrement = () => {  
        this.setState({ count: this.state.count +1 })
    }
    handleDecrement = () => {  
        this.setState({ count: this.state.count -1 })
    }
    render() { 
        return ( 
        <div className="container text-center bg-dark mt-5"> 
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <div>
        <button className="btn btn-success btn-sm"
        onClick={this.handleIncrement}>Increment</button> 
        <button className="btn btn-danger btn-sm m-4"
        onClick={this.handleDecrement}>Decrement</button> 
        </div>
        </div>   
        );
    }

    getBadgeClasses() {
        let classes = "badge p-3 m-5 badge-";
        classes += this.state.count <= 0 ? "danger" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;