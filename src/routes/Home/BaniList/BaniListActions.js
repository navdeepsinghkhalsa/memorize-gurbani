export const UPDATE_BANIS_LIST = 'UPDATE_BANIS_LIST';
const receiveBanisList = banis => ({
  type: UPDATE_BANIS_LIST,
  payload: {
    banis,
  },
});

export const fetchBanisListAction = () => async (dispatch) => {
  const response = await fetch('https://api.banidb.com/v2/banis');
  const banis = await response.json();
  dispatch(receiveBanisList(banis));
};
