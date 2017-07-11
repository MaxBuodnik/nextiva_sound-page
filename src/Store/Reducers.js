import {handleActions} from 'redux-actions'
import Constants from './Constants'
import update from 'react-addons-update'


const {
  GET_ALBUMS,
  SHOW_ALBUM
} = Constants;

const initialState = {
  albumsStore: []
};

export const rootReducer = handleActions({
  [GET_ALBUMS]: (state, action) => update(state, {
    albumsStore: {$set: action.payload}
  }),
  [SHOW_ALBUM]: (state, action) => update(state, {
    albumsStore: {$set: action.payload}
  })
}, initialState);


