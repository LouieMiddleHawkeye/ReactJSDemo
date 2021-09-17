import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  };

  constructor() {
    // Have access to this in the constructor
    super();
    // Methods themselves are objects, so have methods and properties
    // This bind makes sure this is referencing the current Counter object
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // Bootstrap formatting
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  renderTags() {
    if (this.state.tags.length === 0)
      return <p className="badge bg-warning"> There are no tags! </p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });

    // NOTE:
    // obj.method(); this referring to obj
    // function(); this returns reference to window object, if strict mode enabled this will return undefined
  }

  // NOTE:
  // The alternative to using the constructor to get `this` is to use an arrow function
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    // These are JSX expressions - will run `React.createElement` hence why we need the import
    return (
      // Use this instead of div to stop the index.html having a div contain a div
      <React.Fragment>
        <div>
          <img src={this.state.imageUrl} alt="" className="m-2" />
        </div>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm m-2"
          >
            Increment
          </button>
          {/* Both operands are truthy so it returns the second one */}
          {this.state.tags.length === 0 && "Enter some tags!"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
