import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClassNames()}>{this.formatText()}</span>
        <button
          className="btn btn-secondary  btn-sm"
          onClick={()=>this.props.onIncrease(this.props.counter)}
        >
          Increase
        </button>
        <button
          className="btn btn-danger m-2 btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  
  getBadgeClassNames() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatText() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
