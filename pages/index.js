import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';
import Image from '../static/Image';

export default () => (
  <Layout title="Top page" subtitle="on Next.js by React Flamework">
    <p>Welcome to Next.js</p>
    <Link href="/calc"><button className="btn">Calc</button></Link>
    <Link href="/other"><button className="btn">Other</button></Link>
    <Counter />
    <Image fname="logo.png" size="500" />
  </Layout>
);