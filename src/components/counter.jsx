import React, { Component } from "react";

class Counter extends React.Component {
  styles = {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  };

  // // Make sure to add props to the constructor
  // constructor(props) {
  //   // Have access to this in the constructor
  //   super(props);
  //   // Methods themselves are objects, so have methods and properties
  //   // This bind makes sure this is referencing the current Counter object
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // Bootstrap formatting
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // NOTE:
  // obj.method(); this referring to obj
  // function(); this returns reference to window object, if strict mode enabled this will return undefined

  // NOTE:
  // The alternative to using the constructor to get `this` is to use an arrow function
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    // These are JSX expressions - will run `React.createElement` hence why we need the import
    return (
      // Use this instead of div to stop the index.html having a div contain a div
      <div>
        <div>
          {this.props.children}
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
