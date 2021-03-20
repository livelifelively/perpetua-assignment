import { random } from 'lodash';

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
      const randomSongIndex1 = random(0, data.length - 1);
      const randomSongIndex2 = randomSongIndex1 + 1 >= data.length ? randomSongIndex1 - 1 : randomSongIndex1 + 1;

      dispatch(playTrack(data[randomSongIndex1]));
      dispatch(setNextTrack(data[randomSongIndex2]));
      dispatch(loadLyrics(data[randomSongIndex2].trackId));
    });
  };
}
// const randomSongIndex = random(0, filteredData.length - 1);
// dispatch(setNextTrack(filteredData[randomSongIndex]));
// dispatch(loadLyrics(filteredData[randomSongIndex].trackId));
