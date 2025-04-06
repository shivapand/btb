import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router';

import { StoreProvider } from './store';
import _Route from 'client/Route';
import 'client/style/index.scss';

const Login = lazy(() => import('client/Route/Login'));

createRoot(document.body).render(
  <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<_Route />}>
          <Route
            path='Login'
            element={
              <Suspense fallback='Loading...'>
                <Login />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StoreProvider>
);
