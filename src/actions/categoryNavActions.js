import { SHOW_SIDEBAR } from '../constants';

export function showNavBar(payload) {
  return {
    type: SHOW_SIDEBAR,
    payload,
  };
}
