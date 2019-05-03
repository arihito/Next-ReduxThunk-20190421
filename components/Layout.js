import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/style';

class Layout extends Component {

  render() {
    return (<div className="wrapper">
      {style}
      <Header title={this.props.title} subtitle={this.props.subtitle} />
      {this.props.children}
      <Footer footer="&copy; Copyright 2019 ARIHITO MATSUDA AllrightReserved." />
    </div>);
  }
}
export default Layout;