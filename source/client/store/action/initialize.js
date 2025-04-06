import { STORE_INITIALIZE } from '../constant';

export default (body) => {
  return (_dispatch) => {
    const result = body;

    _dispatch({
      type: STORE_INITIALIZE,
      result
    });

    return Promise.resolve(result);
  };
};
