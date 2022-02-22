import React, { Component } from "react";
import Counter from "./counter";
// conponent pass the props and method to the control component and raise the event
// component hold its state property

class Counters extends Component {
  render() {
    // destructure props argument
    const { onDecrease, onDelete, onIncrement, onReset, counters } = this.props;
    // write the destructure form replace the this.props
    return (
      <div>
        {counters.map((c) => (
          <Counter
            key={c.id}
            value={c.value}
            id={c.id}
            counter={c}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            onReset={onReset}
          >
            {/* <h6>Id {c.id}</h6> */}
          </Counter>
        ))}
        <button className="btn-primary btn m-2" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
