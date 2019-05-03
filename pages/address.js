import Layout from '../components/Layout'
import Address from '../components/Address'
import AddressNav from '../components/AddressNav'

export default () => (
  <Layout title="Ads.Note" subtitle="on Next.js by React Flamework">
    <AddressNav>
      <p>This is the Address note</p>
      <Address />
    </AddressNav>
  </Layout>
)