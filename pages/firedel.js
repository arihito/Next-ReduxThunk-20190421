import Layout from '../components/Layout'
import Firedelete from '../components/Firedelete'
import Firenav from '../components/Firenav'

export default () => (
  <Layout title="Memo Del" subtitle="on Next.js by React Flamework">
    <Firenav>
      <p>This is Delete data on Firebase</p>
      <Firedelete />
    </Firenav>
  </Layout>
)