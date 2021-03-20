import { tracksByCategoryName } from '../api';
import { playTrack } from './active-track';
import { setNextTrack, loadLyrics } from './next-track';

export const INIT_PLAYLIST = 'INIT_PLAYLIST';

export function playListStarted(initiated = false) {
  return {
    type: INIT_PLAYLIST,
    initiated,
  };
}

export function fetchSongsByInputCategoryName(categoryName) {
  return (dispatch) => {
    tracksByCategoryName(categoryName, (data) => {
      if (data.length < 2) {
        throw new Error('Too few songs found! Try Again.');
      }
      dispatch(playListStarted(true));
      dispatch(playTrack(data[0]));
      dispatch(setNextTrack(data[1]));
      dispatch(loadLyrics(data[1].trackId));
    });
  };
}
