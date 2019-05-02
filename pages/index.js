import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../static/Image';

export default () => (
  <Layout title="Top page" subtitle="on Next.js by React Flamework">
    <p>Welcome to Next.js</p>
    <Image fname="logo.png" />
  </Layout>
);