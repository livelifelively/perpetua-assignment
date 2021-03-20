import { INIT_PLAYLIST } from '../actions/initiate-playlist';

export default function initiatePlaylistReducer(state = false, action) {
  switch (action.type) {
    case INIT_PLAYLIST:
      return action.initiated;
    default:
      return state;
  }
}
