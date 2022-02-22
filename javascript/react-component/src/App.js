import React, { Component } from "react";
import NavBar from "./component/navbar";
import Counters from "./component/counters";
import "./App.css";
import { Fragment } from "react/cjs/react.production.min";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 4 },
      { id: 5, value: 1 },
    ],
  };
  handleIncrement = (event) => {
    console.log("Increase from", event);
    const counters = [...this.state.counters];
    const index = counters.indexOf(event);
    counters[index] = { ...event };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrease = (event) => {
    console.log("Decrease from", event);
    const counters = [...this.state.counters];
    const index = counters.indexOf(event);
    counters[index] = { ...event };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (event) => {
    const counters = this.state.counters.filter((c) => c.id !== event);
    console.log("Delete event", event);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  // counter
  render() {
    return (
      <Fragment>
        <NavBar total={this.state.counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrease={this.handleDecrease}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
