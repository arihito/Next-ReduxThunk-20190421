import React, { Component } from 'react';
import Link from 'next/link';

class Layout extends Component {

  render() {
    return (<div>
      <Link href="/address"><button className="btn">Address Lists</button></Link>
      <Link href="/address_add"><button className="btn">Address Add</button></Link>
      {this.props.children}
    </div>);
  }
}
export default Layout;