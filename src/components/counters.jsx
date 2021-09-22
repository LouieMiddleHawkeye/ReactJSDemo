import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { counters, onReset, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          // Everything except key will be in the props attribute in counter
          <Counter
            key={counter.id}
            // Bubbling up to parent component
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            {/* adds this as child */}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
