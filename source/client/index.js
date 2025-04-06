import { createRoot } from 'react-dom/client';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router';

import { StoreProvider } from './store';
import _Route from 'client/Route';
import 'client/style/index.scss';

createRoot(document.body).render(
  <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<_Route />} />
      </Routes>
    </BrowserRouter>
  </StoreProvider>
);
