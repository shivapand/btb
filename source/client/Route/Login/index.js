import { useContext, useEffect } from 'react';

import { Store } from '../../store';
import userAuthenticationAction from 'client/store/action/user/authenticate.js';
import { Login as style } from './index.module.scss';

const Login = () => {
  const { dispatch, store } = useContext(Store);

  useEffect(() => {
    !store.user &&
      dispatch(
        userAuthenticationAction({
          username: 'CF@ecolibrium.io',
          password: '9d72a72175b74153c8003e08a3d9ad5a'
        })
      );
  }, [store.user, dispatch]);

  return <div className={style}>Login</div>;
};

export default Login;
