import Layout from '../components/Layout'
import Fireadd from '../components/Fireadd'
import Firenav from '../components/Firenav'

export default () => (
  <Layout title="Memo Add" subtitle="on Next.js by React Flamework">
    <Firenav>
      <p>This is Add data on Firebase</p>
      <Fireadd />
    </Firenav>
  </Layout>
)