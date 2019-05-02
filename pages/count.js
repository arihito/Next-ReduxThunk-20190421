import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () => (
  <Layout title="Counter page" subtitle="on Next.js by React Flamework">
    <p>This is Counter page</p>
    <Counter />
  </Layout>
);