import { createContext, useReducer, useCallback } from 'react';

const Store = createContext(undefined);

const _store = {
  test: false
};

const reducer = (store, action) => {
  switch (action.type) {
    case 'STORE_TEST':
      return {
        ...store,
        test: true
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
