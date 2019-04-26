import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (<Layout header="Next" title="Other page">
  <p>This is Other page</p>
  <Link href="/"><button>Index</button></Link>
</Layout>
);