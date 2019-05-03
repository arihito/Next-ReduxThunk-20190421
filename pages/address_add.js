import Layout from '../components/Layout'
import AddressNav from '../components/AddressNav'
import AddressAdd from '../components/AddressAdd'
import firebase from 'firebase'

export default () => (
  <Layout title="Ads.Add" subtitle="on Next.js by React Flamework">
    <AddressNav>
      <p>This is Address add page</p>
      <AddressAdd />
    </AddressNav>
  </Layout>
)