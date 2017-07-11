import Constants from './Constants'
import axios from 'axios';
import {createAction} from 'redux-actions'

const {
  GET_ALBUMS,
  SHOW_ALBUM
} = Constants;

export const getAlbums = createAction(GET_ALBUMS);
export const showAlbum = createAction(SHOW_ALBUM);

export function getAlbumsAsync() {
  return (dispatch) => {
    axios.get('http://localhost:3010/albums')
      .then((response) => {
        dispatch(getAlbums(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

