export const SONG_PLAY_COMPLETE = 'SONG_PLAY_COMPLETE';

export function songPlayComplete(trackId) {
  return {
    type: SONG_PLAY_COMPLETE,
    trackId,
  };
}
