import React, { Component } from "react";

class Counter extends Component {
  state = {
    num: 0
  };

  render() {
    const IncrementNum = props => {
      this.setState({ num: this.state.num + 1 });

      console.log(this.state.num);
    };

    return (
      <div>
        <span className="badge badge-primary">{this.formatText()}</span>
        <button onClick={IncrementNum}>Increment</button>
      </div>
    );
  }

  formatText(){
    const {num}=this.state;
    return num===0? 'Zero':num;
  }
}

export default Counter;
