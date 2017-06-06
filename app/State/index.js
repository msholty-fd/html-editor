import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import configureStore from './CreateStore';
import drawer from './DrawerRedux';

export default () => configureStore(
  combineReducers({
    routing,
    drawer,
  }),
);
