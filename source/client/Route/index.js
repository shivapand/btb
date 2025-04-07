import { Outlet } from 'react-router';

import './index.scss';

const Route = () => {
  return (
    <div className='Route'>
      <Outlet />
    </div>
  );
};

export default Route;
