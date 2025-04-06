import { createContext, useReducer, useCallback } from 'react';

const Store = createContext(undefined);

const _store = {
  initialized: false
};

const reducer = (store, { type, result }) => {
  switch (type) {
    case 'STORE_INITIALIZE':
      return {
        ...store,
        ...result
      };

    default:
      return store;
  }
};

const StoreProvider = ({ children }) => {
  const [store, _dispatch] = useReducer(reducer, _store);

  const dispatch = useCallback((_action) => {
    return _action(_dispatch);
  }, []);

  return (
    <Store.Provider value={{ store, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StoreProvider };
