import { SHOW_FEEDBACK } from '../constants';

export function showNegativeFeedback(state = false, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_FEEDBACK:
      return payload;
    default:
      return state;
  }
}
