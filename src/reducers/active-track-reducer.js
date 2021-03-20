import { PLAY_TRACK, ACTIVE_TRACK_COMPLETE } from '../actions/active-track';

export default function activeTrackReducer(state = {}, action) {
  switch (action.type) {
    case PLAY_TRACK:
      return action.track;
    case ACTIVE_TRACK_COMPLETE:
      return action.nextTrack;
    default:
      return state;
  }
}
