import { STORE_INITIALIZE, USER_AUTHENTICATE } from './constant';

export default (store, { type, result }) => {
  switch (type) {
    case STORE_INITIALIZE:
      return {
        ...store,
        ...result
      };

    case USER_AUTHENTICATE:
      return {
        ...store,
        ...result
      };

    default:
      return store;
  }
};
