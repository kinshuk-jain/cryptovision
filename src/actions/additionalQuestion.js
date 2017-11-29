import { SHOW_ADDITIONAL_QUESTION } from '../constants';

export function showAdditionalQuestion(payload = false) {
  return {
    type: SHOW_ADDITIONAL_QUESTION,
    payload,
  };
}
