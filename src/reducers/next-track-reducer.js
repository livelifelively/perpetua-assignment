import { NEXT_TRACK } from '../actions/next-track';

export default function activeTrackReducer(state = {}, action) {
  switch (action.type) {
    case NEXT_TRACK:
      return action.track;
    default:
      return state;
  }
}
