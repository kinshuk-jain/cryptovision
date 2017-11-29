/* eslint-disable no-unused-expressions */

import _ from 'lodash';

export const disableBodyScrolling = (condition, avoidFixed) => {
  if (condition) {
    document.body.style.overflow = 'hidden';
    // avoid fixed is used here in order to prevent the body from making position fixed.
    // this is used for disabling scroll while slider is active.
    !avoidFixed && (document.body.style.position = 'fixed'); // eslint-disable-line no-unused-expressions
  } else {
    document.body.style.overflow = 'visible';
    !avoidFixed && (document.body.style.position = 'static'); // eslint-disable-line no-unused-expressions
  }
};

export function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

export function addRemoveScrollEventListener(fn, remove = false) {
  // detect if passive event listers are supported
  let supportPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        supportPassive = true;
        return true;
      },
    });
    window.addEventListener('dummy', null, opts);
    window.removeEventListener('dummy', null, opts);
  } catch (err) {
    /* do nothing */
  }
  // attach event listener
  const scrollCB = _.throttle(fn, 200);
  const options = supportPassive ? { capture: true, passive: true } : true;
  remove
    ? window.removeEventListener('scroll', scrollCB, options)
    : window.addEventListener('scroll', scrollCB, options);
}
