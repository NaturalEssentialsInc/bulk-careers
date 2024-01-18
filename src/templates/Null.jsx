import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Null = () => {
 

  return (
    <Layout>
      <div style={{}}>
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/">Return to homepage</Link>
      </div>
    </Layout>
  );
};



export default Null;

