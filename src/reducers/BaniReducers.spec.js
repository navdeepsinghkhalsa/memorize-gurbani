import { banis } from './BaniReducers';
import { UPDATE_BANIS_LIST } from '../actions/BaniActions';

describe('sets the list of Banis', () => {
  const stateBefore = [];
  it('should return an empty array on initialization', () => {
    const action = {
      type: '',
    };
    expect(banis(undefined, action))
      .toEqual(stateBefore);
  });

  it('should add Banis to an empty state', () => {
    const action = {
      type: UPDATE_BANIS_LIST,
      payload: {
        banis: [{
          ID: 1,
          gurmukhi: 'gur mMqR',
          gurmukhiUni: 'ਗੁਰ ਮੰਤ੍ਰ',
          token: 'gurmantar',
          transliteration: 'gur ma(n)tr',
          updated: '2017-09-23 03:28:45',
        }],
      },
    };
    expect(banis([], action))
      .toEqual(action.payload.banis);
  });
});
