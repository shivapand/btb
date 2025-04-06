import { useContext, useState, useEffect } from 'react';

import { Store } from '../../store';
import actionUserAuthentication from 'client/store/action/user/authenticate.js';
import SmartSenseLogoSvg from '../../asset/image/smartsense-logo.svg';
import Copyright from './Component/Copyright';
import Policy from './Component/Policy';
import './index.scss';

const Login = () => {
  const { dispatch, store } = useContext(Store);

  const [username, usernameSet] = useState();

  const [password, passwordSet] = useState();

  const [loading, loadingSet] = useState();

  useEffect(() => {
    !store.user &&
      dispatch(
        actionUserAuthentication({
          username: 'CF@ecolibrium.io',
          password: '9d72a72175b74153c8003e08a3d9ad5a'
        })
      );
  }, [store.user, dispatch]);

  return (
    <div className='Login'>
      <div className='top'>
        <div className='smartsense-logo-container'>
          <SmartSenseLogoSvg className='smartsense-logo' alt='logo' />
        </div>
      </div>

      <div className='middle'>
        <form
          className='form'
          onSubmit={(event) => {
            event.preventDefault();

            event.stopPropagation();

            loadingSet(true);
          }}
        >
          <legend>Log In</legend>

          <div className='fieldset'>
            <div className='_fieldset'>
              <input
                type='text'
                placeholder='Username'
                autoComplete='email'
                required={true}
                className='form-control'
                value={username || ''}
                onChange={(event) => {
                  usernameSet(event.target.value);
                }}
              />
            </div>

            <div className='_fieldset'>
              <input
                type='password'
                placeholder='Password'
                autoComplete='current-password'
                required={true}
                className='form-control'
                value={password || ''}
                onChange={(event) => {
                  passwordSet(event.target.value);
                }}
              />
            </div>
          </div>

          <div className='submit-container'>
            <button className='btn btn-light' type='submit' disabled={loading}>
              LOG IN
            </button>
          </div>
        </form>
      </div>

      <div className='bottom'>
        <div className='copyright-container'>
          <Copyright />
        </div>

        <div className='policy-container'>
          <Policy />
        </div>
      </div>
    </div>
  );
};

export default Login;
