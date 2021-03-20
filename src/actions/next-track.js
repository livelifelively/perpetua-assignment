import { random } from 'lodash';
import { lyricsByTrackId, tracksByCategoryName } from '../api';

export const NEXT_TRACK = 'NEXT_TRACK';
export const LOAD_NEW_TRACK = 'LOAD_NEW_TRACK';
export const RANDOM_WORDS = 'RANDOM_WORDS';

export function setNextTrack(track) {
  return {
    type: NEXT_TRACK,
    track,
  };
}

export function randomWordsFromLyrics(randomWords) {
  return {
    type: RANDOM_WORDS,
    randomWords,
  };
}

export function loadLyrics(trackId) {
  return (dispatch) => {
    lyricsByTrackId(trackId, (data) => {
      dispatch(randomWordsFromLyrics(data.randomWords));
    });
  };
}

function filterPreviouslyPlayedSongs(data, prevPlayed) {
  return data.filter((v) => {
    return prevPlayed[v.trackId] === undefined;
  });
}

export function songsByRandomWordsString(randomWordsString, prevPlayed) {
  return (dispatch) => {
    tracksByCategoryName(randomWordsString, (data) => {
      console.log(data);
      const filteredData = filterPreviouslyPlayedSongs(data, prevPlayed);
      console.log(filteredData);
      const randomSongIndex = random(0, filteredData.length - 1);
      dispatch(setNextTrack(filteredData[randomSongIndex]));
      dispatch(loadLyrics(filteredData[randomSongIndex].trackId));
    });
  };
}
