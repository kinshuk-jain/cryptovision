import { SHOW_FEEDBACK } from '../constants';

export function showFeedbackModal(payload = false) {
  return {
    type: SHOW_FEEDBACK,
    payload,
  };
}
