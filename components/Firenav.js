import React, { Component } from 'react';
import Link from 'next/link';

class Layout extends Component {

  render() {
    return (<div>
      <Link href="/fire"><button className="btn">Memo Lists</button></Link>
      <Link href="/firesearch"><button className="btn">Memo Find</button></Link>
      <Link href="/fireadd"><button className="btn">Memo Add</button></Link>
      <Link href="/firedel"><button className="btn">Memo Delete</button></Link>
      {this.props.children}
    </div>);
  }
}
export default Layout;