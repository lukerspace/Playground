import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["love movie", "cartoon", "animation"],
    movies: ["Starwar", "Lukeskywalker", "Avenger"],
  };
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
    if (this.state.movies.length === 0) return <span>There's no Tags</span>;
    return (
      <div>
        {this.state.movies.map((tag) => (
          <button className="btn btn-primary btn-sm m-1" key={tag}>
            {tag}
          </button>
        ))}
      </div>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (event) => {
    //   Method can't read the State(attribute) directly therefore we can't insert this.state.count which lead to undefined
    //   Binding event handler use Contructor to binding Even Handler
    //   Use Arrow Function
    console.log(event);
    console.log("Event Handler Clicked", this);
    this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    console.log("Event Decrease Clicked", this);
    this.state.count--;
    this.setState({ cont: this.state.count - 1 });
  };

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m !== movie);
    console.log(movies);
    this.setState({ movies });
  };

  render() {
    return (
      <Fragment>
        <div>
          <button style={this.styles} className={this.getbtnClasses()}>
            {this.formatCount()}
          </button>
          <button
            // Pass the argument therefore use arrow function to pass the argument on the onClick
            onClick={() => this.handleIncrement({ id: 1 })}
            className="btn btn-secondary btn-sm m-2"
          >
            Increment
          </button>
          <button
            // Pass the argument therefore use arrow function to pass the argument on the onClick
            onClick={() => this.handleDecrease()}
            className="btn btn-secondary btn-sm"
          >
            Decrease
          </button>
          <div>
            {this.state.tags.map((tag) => (
              <button className="btn btn-success btn-sm m-1" key={tag}>
                {tag}
              </button>
            ))}
          </div>
          <hr></hr>

          <table className="table">
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie}>
                  <td>{movie}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>{this.state.movies.length === 0 && "Please Create Tags"} </div>
          {this.renderTag()}
        </div>
      </Fragment>
    );
  }
}

export default Counter;
