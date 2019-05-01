import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () => (
  <Layout title="Other page" subtitle="on Next.js by React Flamework">
    <p>This is Other page</p>
    <Link href="/"><button className="btn">Index</button></Link>
    <Link href="/calc"><button className="btn">Calc</button></Link>
    <Counter />
  </Layout>
);