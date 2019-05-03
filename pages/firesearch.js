
import Layout from '../components/Layout';
import Firefind from '../components/Firefind'
import Firenav from '../components/Firenav'

export default () => (
  <Layout title="Memo Find" subtitle="on Next.js by React Flamework">
    <Firenav>
      <p>This is Search id on Firebase</p>
      <Firefind />
    </Firenav>
  </Layout>
);