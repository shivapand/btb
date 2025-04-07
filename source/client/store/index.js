import { createContext, useReducer, useCallback, useEffect } from 'react';
import { EncryptStorage } from 'encrypt-storage';
import { useLocation, useNavigate } from 'react-router';
import _ from 'lodash';
import moment from 'moment';
import 'moment-timezone';

import reducer from './reducer';

const localStorageStoreKey = 'store';

const locationPathnameCollection = ['', 'Login', 'Dashboard'].map(
  (value) => `/${value}`
);

const Store = createContext(undefined);

const encryptStorage = new EncryptStorage(globalThis.ENCRYPT_STORAGE_KEY, {
  storageType: 'sessionStorage',
  stateManagementUse: true
});

const _store = {
  ...JSON.parse(encryptStorage.getItem(localStorageStoreKey) || '{}')
};

const matchedGet = (value, collection) => {
  return collection.reduce((memo, _value) => {
    const match = _value === value;

    return match ? !memo : memo;
  }, false);
};

const StoreProvider = ({ children }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const [store, _dispatch] = useReducer(reducer, _store);

  const dispatch = useCallback((_action) => {
    return _.isFunction(_action) && _action(_dispatch);
  }, []);

  useEffect(() => {
    encryptStorage.setItem(localStorageStoreKey, JSON.stringify(store));

    switch (true) {
      case !store.user:
        !matchedGet(
          location.pathname,
          locationPathnameCollection.slice(1, 2)
        ) && navigate({ pathname: locationPathnameCollection[1] });

        break;

      case moment().utcOffset() !==
        moment
          .duration(moment.tz(store.user.member.timezone).format('Z'))
          .asMinutes():
        moment.tz.setDefault(store.user.member.timezone);

      // disable-next-line eslint no-fallthrough
      case matchedGet(
        location.pathname,
        locationPathnameCollection.slice(0, 2)
      ):
        navigate({ pathname: locationPathnameCollection[2] });
    }
  }, [store, location, navigate]);

  return (
    <Store.Provider value={{ store, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StoreProvider };
