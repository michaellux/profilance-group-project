const thenable = (something) => {
  if (
    something !== null
    && (
      typeof something === 'object'
      || typeof something === 'function'
    )
    && typeof something.then === 'function'
  ) {
    return true;
  }

  return false;
};

export default thenable;
