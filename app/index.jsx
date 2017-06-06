import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from 'Containers/Root';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./Containers/Root', () => {
    /* eslint-disable global-require */
    const NewRoot = require('./Containers/Root').default;

    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      rootEl,
    );
  });
}
