import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router';

import { Store } from 'client/store';
import initialize from 'client/store/action/initialize';

const Route = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch(initialize({ initialized: true }));
  }, [dispatch]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Route;
