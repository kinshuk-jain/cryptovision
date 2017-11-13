import { SHOW_TOPBAR } from '../constants';

export function closeTopBar(payload) {
  return {
    type: SHOW_TOPBAR,
    payload,
  };
}
