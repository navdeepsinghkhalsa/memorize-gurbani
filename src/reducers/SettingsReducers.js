import { UPDATE_TESTING_MODE } from '../actions/SettingsActions';

export const settings = (state = { baniLength: 'BuddhaDal', schemaVer: 1 }, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export const testingMode = (state = false, { type, payload }) => {
  switch (type) {
    case UPDATE_TESTING_MODE:
      return payload.testingModeBool;
    default:
      return state;
  }
};
