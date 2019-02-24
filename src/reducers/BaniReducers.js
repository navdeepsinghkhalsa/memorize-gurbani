import { UPDATE_BANIS_LIST } from '../actions/BaniActions';

export const banis = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_BANIS_LIST:
      return payload.banis;
    default:
      return state;
  }
};
