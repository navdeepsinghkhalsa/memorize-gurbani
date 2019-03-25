import { combineReducers } from 'redux';

import {
  banis,
} from '../reducers/BaniReducers';
import {
  settings,
} from '../reducers/SettingsReducers';

export default combineReducers({
  banis,
  settings,
});
