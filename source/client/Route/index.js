import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router';

import { Store } from 'client/store';
import actionInitialize from 'client/store/action/initialize';
import './index.scss';

const Route = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch(actionInitialize({ initialized: true }));
  }, [dispatch]);

  return (
    <div className='Route'>
      <Outlet />
    </div>
  );
};

export default Route;
