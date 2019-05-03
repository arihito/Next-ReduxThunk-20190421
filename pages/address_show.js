import Layout from '../components/Layout'
import AddressNav from '../components/AddressNav'
import AddressShow from '../components/AddressShow'
import firebase from 'firebase'

export default () => (
  <Layout title="Ads.Show" subtitle="on Next.js by React Flamework">
    <AddressNav>
      <p>This is Address lists page</p>
      <AddressShow />
    </AddressNav>
  </Layout>
)