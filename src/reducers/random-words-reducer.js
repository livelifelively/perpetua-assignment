// RANDOM_WORDS
import { RANDOM_WORDS } from '../actions/next-track';

export default function randomWordsReducer(state = '', action) {
  switch (action.type) {
    case RANDOM_WORDS:
      return action.randomWords;
    default:
      return state;
  }
}
