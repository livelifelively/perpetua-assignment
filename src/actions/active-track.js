export const PLAY_TRACK = 'PLAY_TRACK';
export const ACTIVE_TRACK_COMPLETE = 'ACTIVE_TRACK_COMPLETE';

export function playTrack(track) {
  return {
    type: PLAY_TRACK,
    track,
  };
}

export function activeTrackComplete({ completedTrack, nextTrack }) {
  return {
    type: ACTIVE_TRACK_COMPLETE,
    completedTrack,
    nextTrack,
  };
}
