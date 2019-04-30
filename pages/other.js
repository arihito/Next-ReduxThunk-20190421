import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (<Layout title="Other page" subtitle="on Next.js by React Flamework">
  <p>This is Other page</p>
  <Link href="/"><button className="btn">Index</button></Link>
</Layout>
);