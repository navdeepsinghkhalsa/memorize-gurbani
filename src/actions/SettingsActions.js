export const UPDATE_TESTING_MODE = 'UPDATE_TESTING_MODE';
export const updateTestingModeAction = testingModeBool => ({
  type: UPDATE_TESTING_MODE,
  payload: {
    testingModeBool,
  },
});
