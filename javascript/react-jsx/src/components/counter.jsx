import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = { count: 0, tags: ["tag1", "tag2", "tag3"] };
  state2 = { tags: [] };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  getbtnClasses() {
    let dynaClass = "btn m-2 btn-";
    dynaClass += this.state.count === 0 ? "danger" : "primary";
    return dynaClass;
  }

  formatCount() {
    const { count } = this.state;
    //     Property Picking => By Picking up the Content in Object and distribute it into { Count }
    return count === 0 ? "ZERO" : count;
  }

  renderTag() {
    if (this.state2.tags.length === 0) return <span>There's no Tags</span>;
    return (
      <ul>
        {this.state2.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    //   Method can't read the State(attribute) directly therefore we can't insert this.state.count which lead to undefined
    //   Binding event handler use Contructor to binding Even Handler
    //   Use Arrow Function
    console.log("Event Handler Clicked", this);
    this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button style={this.styles} className={this.getbtnClasses()}>
          {this.formatCount()}
        </button>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <hr></hr>
        <div>{this.state2.tags.length === 0 && "Please Create Tags"} </div>
        {this.renderTag()}
      </div>
    );
  }
}

export default Counter;
