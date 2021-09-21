import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = () => {
    console.log("Event ");
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          // Everything except key will be in the props attribute in counter
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
          >
            {/* adds this as child */}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
