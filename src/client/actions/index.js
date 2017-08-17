import { bindActionCreators } from 'redux';

import * as userActions from './userActions';
import * as fileActions from './fileActions';

import store from '../../shared/store';

const allActions = {
  ...userActions,
  ...fileActions,
};

//  'Prebind' the Redux store's dispatch() to all action creators for easier usage.
//  Components don't need connect() to be able to dispatch actions this way.
export default bindActionCreators(allActions, store.dispatch);
