import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClassNames()}>{this.formatText()}</span>
        <button className="btn btn-secondary  btn-sm" onClick={this.Increasevalue}>Increase</button>
        <button className="btn btn-danger m-2 btn-sm" onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }

  Increasevalue=() => {
    this.setState({ value: this.state.value + 1 });
    // console.log(this.state.value);
  };
  getBadgeClassNames() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.value === 0 ? "warning" : "primary");
  }

  formatText() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
