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
      <Link href="/fire"><button className="btn">Firebase</button></Link>
      <Link href="/firesearch"><button className="btn">FireSearch</button></Link>
      <Link href="/fireadd"><button className="btn">FireAdd</button></Link>
      <Link href="/firedel"><button className="btn">FireDelete</button></Link>
    </header>);
  }
}
export default Header;