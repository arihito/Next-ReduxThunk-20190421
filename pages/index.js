import Counter from '../components/Counter';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from '../static/Image';

export default () => (
  <Layout title="Top page" subtitle="on Next.js by React Flamework">
    <p>Welcome to Next.js</p>
    <Link href="/other"><button className="btn">Other</button></Link>
    <Image fname="logo.png" size="500" />
    <Counter />
  </Layout>
);