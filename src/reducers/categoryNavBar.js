import { SHOW_SIDEBAR } from '../constants';

export function showSidebar(state = true, action) {
  const { type, payload = true } = action;
  switch (type) {
    case SHOW_SIDEBAR:
      return payload;
    default:
      return state;
  }
}
