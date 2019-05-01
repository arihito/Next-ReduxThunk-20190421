import Link from 'next/link';
import Layout from '../components/Layout';
import Calc from '../components/Calc';

export default () => (
  <Layout title="Calculator" subtitle="on Next.js by React Flamework">
    <p>This is Calc page</p>
    <Link href="/"><button className="btn">Index</button></Link>
    <Link href="/calc"><button className="btn">Calc</button></Link>
    <Calc />
  </Layout>
);