import { ACTIVE_TRACK_COMPLETE } from '../actions/active-track';

export default function songsReducer(state = {}, action) {
  switch (action.type) {
    case ACTIVE_TRACK_COMPLETE:
      return {
        ...state,
        [action.completedTrack.trackId]: action.completedTrack,
      };
    default:
      return state;
  }
}
