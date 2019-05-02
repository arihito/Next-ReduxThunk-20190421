import React, { Component } from 'react';
class Image extends Component {

  constructor(props) {
    super(props);
    this.fname = "./static/" + props.fname;
  }

  render() {
    return (
      <img src={this.fname} className="mainImg" />
    )
  }
}

export default Image;