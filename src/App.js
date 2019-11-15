import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 1 }
    ]
  };

  IncreaseValue = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  resetValue = () => {
    const counters = this.state.counters.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ counters });
  };

  deleteCounter = counterId => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({ counters });
    // console.log(counter);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(item => item.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.resetValue}
            onIncrease={this.IncreaseValue}
            onDelete={this.deleteCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
