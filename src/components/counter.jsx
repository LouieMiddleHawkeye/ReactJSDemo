import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  };

  render() {
    // These are JSX expressions - will run `React.createElement` hence why we need the import
    return (
      // Use this instead of div to stop the index.html having a div contain a div
      <React.Fragment>
        <div>
          <img src={this.state.imageUrl} alt="" className="m-2" />
        </div>
        <div>
          {/* Bootstrap formatting, look at there documentation */}
          <span style={this.styles} className="badge bg-secondary m-2">
            {this.formatCount()}
          </span>
          <button className="btn btn-secondary btn-sm m-2">Increment</button>
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
