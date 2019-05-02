import Link from 'next/link';
import Layout from '../components/Layout';
import Calc from '../components/Calc';

export default () => (
  <Layout title="Calculator page" subtitle="on Next.js by React Flamework">
    <p>This is Calc page. Enter number in textbox.</p>
    <Calc />
  </Layout>
);