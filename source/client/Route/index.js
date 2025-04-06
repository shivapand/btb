import { useContext, useEffect } from 'react';

import { Store } from 'client/store';
import initialize from 'client/store/action/initialize';

const Route = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch(initialize({ initialized: true }));
  }, [dispatch]);

  return (
    <div>
      <div>MAHA</div>
    </div>
  );
};

export default Route;
