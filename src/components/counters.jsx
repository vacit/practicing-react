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
          <Counter
            key={counter.id}
            onDelete={()=>this.deleteCounter(counter.id)}
            value={counter.value} id={counter.id}
          >
            <h3>counter #{counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }

  deleteCounter=(counterId) =>{
    
    const counterToBeDeleted= this.state.counters[counterId-1];

    console.log(counterToBeDeleted.id)
    this.state.counters.filter(item=>{
      item.id===counterToBeDeleted.id? this.state.counter
    });
  }
}

export default Counters;
