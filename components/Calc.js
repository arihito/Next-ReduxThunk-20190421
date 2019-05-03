import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }

  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  onKeyPress(e) {
    if (event.keyCode == 13) {
      this.doAction(e);
    }
  }

  doAction(e) {
    this.setState({
      input: '',
    });
    return this.props.dispatch({
      type: 'ENTER',
      value: this.state.input
    });
  }

  reset() {
    this.setState({
      input: '',
    });
    return this.props.dispatch({ type: 'RESET' });
  }

  render() {
    let result = [];
    let n = this.props.data.length;
    for (let i = 0; i < n; i++) {
      result.push(<tr className="lists" key={i}>
        <th>{this.props.data[i]}</th>
      </tr>);
    }
    return (
      <div>
        <input type="text" className="inputtext" size="8" placeholder="Number" value={this.state.input} onChange={this.onChange} onKeyPress={this.onKeyPress} />
        <button className="btn" onClick={this.doAction}>Enter</button>
        <button className="btn" onClick={this.reset}>Reset</button>
        <p>{this.props.message}</p>
        <p className="total">TOTAL: {this.props.result}</p>
        <table className="firetable">{result}</table>
      </div>
    )
  }
}

Calc = connect((state) => state)(Calc);
export default Calc;