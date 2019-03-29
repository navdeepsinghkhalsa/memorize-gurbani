import { combineReducers } from 'redux';

import {
  banis,
} from '../reducers/BaniReducers';
import {
  settings,
  testingMode,
} from '../reducers/SettingsReducers';

export default combineReducers({
  banis,
  settings,
  testingMode,
});
