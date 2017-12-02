import { ADD_TO_PINBAR } from '../constants';

export function getQuesAddedToPinBar(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_PINBAR:
      return payload;
    default:
      return state;
  }
}
