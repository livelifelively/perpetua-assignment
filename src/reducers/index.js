import { combineReducers } from 'redux';

import auth from './auth-reducer';
import songsPlayed from './played-songs-reducer';
import activeTrack from './active-track-reducer';
import nextTrack from './next-track-reducer';
import initiated from './initiate-playlist-reducer';
import randomWords from './random-words-reducer';

export default combineReducers({
  auth,
  songsPlayed,
  activeTrack,
  nextTrack,
  initiated,
  randomWords,
});
