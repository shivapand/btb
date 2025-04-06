export default () => {
  return (_dispatch) => {
    _dispatch({
      type: 'STORE_TEST',
      result: true
    });

    return true;
  };
};
