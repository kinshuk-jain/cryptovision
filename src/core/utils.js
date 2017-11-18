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
