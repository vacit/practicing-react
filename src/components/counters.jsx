import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {onReset,onDelete,onIncrease,counters}=this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-secondary btn-sm m2"
        >
          reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrease={onIncrease}
            counter={counter}
          >
            <h3>counter #{counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
