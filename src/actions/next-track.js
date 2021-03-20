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

export function songsByRandomWordsString(randomWordsString) {
  return (dispatch) => {
    tracksByCategoryName(randomWordsString, (data) => {
      // check previously played songs to filter out
      dispatch(setNextTrack(data[0]));
      dispatch(loadLyrics(data[0].trackId));
    });
  };
}
