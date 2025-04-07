import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router';

import { StoreProvider } from './store';
import _Route from 'client/Route';
import 'client/style/index.scss';

const Login = lazy(() => import('client/Route/Login'));

const Dashboard = lazy(() => import('client/Route/Dashboard'));

const fallback = 'Loading...';

createRoot(document.body).render(
  <BrowserRouter>
    <StoreProvider>
      <Routes>
        <Route path='/' element={<_Route />}>
          <Route
            path='Login'
            element={
              <Suspense fallback={fallback}>
                <Login />
              </Suspense>
            }
          />

          <Route
            path='Dashboard'
            element={
              <Suspense fallback={fallback}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </StoreProvider>
  </BrowserRouter>
);
