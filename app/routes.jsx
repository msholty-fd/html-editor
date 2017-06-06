import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'Components/App';
import Editor from 'Containers/Editor';
import NotFound from 'Components/NotFound';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Editor} />
    <Route path="*" component={NotFound} />
  </Route>
);
