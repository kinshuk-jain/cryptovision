import { SHOW_ADDITIONAL_QUESTION } from '../constants';

export function showAddQuestion(state = false, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ADDITIONAL_QUESTION:
      return payload;
    default:
      return state;
  }
}
