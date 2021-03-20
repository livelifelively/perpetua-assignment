/* eslint-disable camelcase */
import { tracksByCategoryNameAPI_to_tracksList, lyricsByTrackIdAPI_to_lyrics } from './adapters';

import jsonpFetch from '../services/jsonp-fetch';
import { getCookie } from '../services/cookies';

const API_KEY = getCookie('apiKey');

export async function tracksByLyrics(query) {
  return fetch(
    `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_lyrics=${query}&quorum_factor=1&apikey=${API_KEY}`
  ).then((res) => res.json());
}

export function lyricsByTrackId(trackId, cb) {
  jsonpFetch(
    `https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&track_id=${trackId}&apikey=${API_KEY}`,
    cb,
    lyricsByTrackIdAPI_to_lyrics
  );
}

export function validateApiKey() {
  jsonpFetch(
    `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&q_lyrics=test&quorum_factor=1&apikey=${API_KEY}`,
    () => {},
    () => {}
  );
}

export function tracksByCategoryName(categoryName, cb) {
  jsonpFetch(
    `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&q_lyrics=${categoryName}&quorum_factor=1&apikey=${API_KEY}`,
    cb,
    tracksByCategoryNameAPI_to_tracksList
  );
}
