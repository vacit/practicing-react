import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 1 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} onDelete={this.deleteCounter} value={counter.value}>
            <h3>counter #{counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }

  deleteCounter() {
    console.log("deleted");
  }
}

export default Counters;
