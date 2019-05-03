import Layout from '../components/Layout';
import Firenav from '../components/Firenav';
import Link from 'next/link';
import Sampledata from '../components/Sampledata';


export default () => (
  <Layout title="Memo Lists" subtitle="on Next.js by React Flamework">
    <Firenav>
      <p>This is getting the Firebase data</p>
      <Sampledata />
    </Firenav>
  </Layout>
);