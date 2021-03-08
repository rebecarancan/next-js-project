import React from 'react';

import User from '../../components/User';

const authIndexPage = () => (
  <div>
    <h1>The auth index page</h1>
    <User name="Rebeca" age={30} />
  </div>
);

export default authIndexPage;