import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from '../static/style';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }

  doAction(e) {
    if (e.shiftKey) {
      return this.props.dispatch({ type: 'DECREMENT' });
    } else {
      return this.props.dispatch({ type: 'INCREMENT' });
    }
  }

  reset() {
    return this.props.dispatch({ type: 'RESET' });
  }

  render() {
    return (
      <div>
        {style}
        <p>{this.props.message}: {this.props.count}</p>
        <button className="btn" onClick={this.doAction}>Count</button>
        <button className="btn" onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

Counter = connect((state) => state)(Counter);
export default Counter;