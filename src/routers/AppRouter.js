import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          exact
          element={
            user
              ? <Navigate to="/app" />
              : <Login />
          }
        />

        <Route
          path="/app"
          exact
          element={
            !user
              ? <Navigate to="/" />
              : <Home />
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
