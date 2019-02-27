import {
  ADD_BANI,
  UPDATE_BANIS_LIST,
} from '../actions/BaniActions';

export const banis = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_BANIS_LIST:
      return payload.banis;
    case ADD_BANI:
      return [
        ...state.map((bani) => {
          if (payload.baniID === bani.ID) {
            return {
              ...bani,
              gurbani: payload.gurbani,
            };
          }
          return bani;
        }),
      ];
    default:
      return state;
  }
};
