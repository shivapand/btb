import { USER_AUTHENTICATE } from './constant';

export default (store, { type, result }) => {
  switch (type) {
    case USER_AUTHENTICATE:
      return {
        ...store,
        ...result
      };

    default:
      return store;
  }
};
