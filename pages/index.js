import Counter from '../components/Counter';
import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
  <Layout header="Next" title="Top page">
    <div>Welcome to Next.js</div>
    <Link href="/other"><button>Other</button></Link>
    <Counter />
  </Layout>
);