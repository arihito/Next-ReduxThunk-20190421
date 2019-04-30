import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (<header className="glHeader">
      <h1 className="title">{this.props.title}</h1>
      <p className="subtitle">{this.props.subtitle}</p>
    </header>);
  }
}
export default Header;