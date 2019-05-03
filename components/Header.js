import React, { Component } from 'react'
import Link from 'next/link';

class Header extends Component {

  render() {
    return (<header className="glHeader">
      <h1 className="title">{this.props.title}</h1>
      <p className="subtitle">{this.props.subtitle}</p>
      <Link href="/"><button className="btn">Top</button></Link>
      <Link href="/calc"><button className="btn">Calcurator</button></Link>
      <Link href="/count"><button className="btn">Counter</button></Link>
      <Link href="/fire"><button className="btn">Memo</button></Link>
    </header>);
  }
}
export default Header;