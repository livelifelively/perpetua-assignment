/* eslint-disable camelcase */
import { uniq, random } from 'lodash';

export function tracksByCategoryNameAPI_to_tracksList(data) {
  const tracksList = data?.message?.body?.track_list || [];

  return tracksList.map((val) => {
    const { has_lyrics, track_id, track_name, instrumental, album_id, album_name, artist_name, artist_id } = val.track;

    return {
      hasLyrics: has_lyrics,
      trackId: track_id,
      trackName: track_name,
      isInstrumental: instrumental,
      albumId: album_id,
      albumName: album_name,
      artistId: artist_id,
      artistName: artist_name,
    };
  });
}

export function tracksByLyricsAPI_to_tracksList() {}

function uniqueUncommonWordsFromLyrics(lyrics) {
  const aplhabets = 'abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const commonWords = [
    'i',
    'a',
    'about',
    'an',
    'and',
    'are',
    'as',
    'at',
    'be',
    'by',
    'com',
    'de',
    'en',
    'for',
    'from',
    'how',
    'in',
    'is',
    'it',
    'la',
    'of',
    'on',
    'or',
    'that',
    'the',
    'this',
    'to',
    'was',
    'what',
    'when',
    'where',
    'who',
    'will',
    'with',
    'und',
    'the',
    'www',
    'not',
    'so',
    'these',
    ...aplhabets,
    '',
  ];

  let text = lyrics;
  text = text.toLowerCase();
  text = text.replace(/[^\w\d ]/g, ' ');

  let result = text.split(' ');

  result = result.filter((word) => {
    return commonWords.indexOf(word) === -1;
  });

  result = uniq(result);

  return result;
}

function randomWords(uniqueWords, count = 5) {
  let newUniqueWords = [...uniqueWords];
  const rand = [];
  while (rand.length < count) {
    const i = random(0, newUniqueWords.length);
    const randomWord = newUniqueWords[i];
    rand.push(randomWord);
    newUniqueWords = newUniqueWords.filter((v) => v !== randomWord);
  }
  return rand;
}

export function lyricsByTrackIdAPI_to_lyrics(data) {
  const lyrics = data?.message?.body?.lyrics || {};

  let lyricsText = lyrics.lyrics_body.replace('↵', ' ');
  [lyricsText] = lyricsText.split('***');

  const uniqueWords = uniqueUncommonWordsFromLyrics(lyricsText);
  const randomWordsArray = randomWords(uniqueWords, 5);

  return {
    lyrics: lyrics.lyrics_body,
    lyricsId: lyrics.lyrics_id,
    randomWords: randomWordsArray.join(' '),
  };
}
