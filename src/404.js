import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default NoMatch;
