import { useContext, useEffect } from 'react';

import { Store } from 'client/store';
import storeTest from 'client/store/action/storeTest';

const Route = () => {
  const { store, dispatch } = useContext(Store);

  console.log('HERE>>', store);

  useEffect(() => {
    dispatch(storeTest());
  }, [dispatch]);

  return (
    <div>
      <div>MAHA</div>
    </div>
  );
};

export default Route;
