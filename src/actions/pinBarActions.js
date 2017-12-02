import { ADD_TO_PINBAR } from '../constants';

export function addToPinBar(payload = {}) {
  return {
    type: ADD_TO_PINBAR,
    payload,
  };
}
