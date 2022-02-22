import React, { Component, Fragment } from "react";
// control component whenever the data need modify it will control the ebv

class Counter extends Component {
  getbtnClasses() {
    let dynamiClass = "btn m-2 btn-";
    dynamiClass += this.props.counter.value === 0 ? "warning" : "primary";
    return dynamiClass;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    // console.log("Props", this.props);
    return (
      <Fragment>
        {this.props.children}
        <div>
          {/* Value */}
          <button style={this.styles} className={this.getbtnClasses()}>
            {this.formatCount()}
          </button>
          <button
            // Pass the argument therefore use arrow function to pass the argument on the onClick
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Increment
          </button>
          <button
            // Pass the argument therefore use arrow function to pass the argument on the onClick
            onClick={() => this.props.onDecrease(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Decrease
          </button>
          <button
            className="btn btn-danger btn-sm m2"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Delete
          </button>
         
        </div>
      </Fragment>
    );
  }
}

export default Counter;
