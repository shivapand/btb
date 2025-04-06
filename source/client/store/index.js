import { createContext, useReducer, useCallback } from 'react';
import { EncryptStorage } from 'encrypt-storage';
import _ from 'lodash';

import reducer from './reducer';

const localStorageStoreKey = 'store';

const Store = createContext(undefined);

const encryptStorage = new EncryptStorage(globalThis.ENCRYPT_STORAGE_KEY, {
  storageType: 'sessionStorage',
  stateManagementUse: true
});

const _store = {
  initialized: false,
  ...JSON.parse(encryptStorage.getItem(localStorageStoreKey) || '{}')
};

const StoreProvider = ({ children }) => {
  const [store, _dispatch] = useReducer(reducer, _store);

  const dispatch = useCallback((_action) => {
    return _.isFunction(_action) && _action(_dispatch);
  }, []);

  encryptStorage.setItem(localStorageStoreKey, JSON.stringify(store));

  return (
    <Store.Provider value={{ store, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StoreProvider };
