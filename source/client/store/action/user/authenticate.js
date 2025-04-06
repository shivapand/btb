import { USER_AUTHENTICATE } from '../../constant';

export default (body) => {
  return (_dispatch) => {
    return fetch(`${globalThis.API_ENDPOINT_ROOT}/auth/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        _dispatch({
          type: USER_AUTHENTICATE,
          result: {
            user: result
          }
        });
      });
  };
};
