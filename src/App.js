import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './login/Login';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={
      <LoginAuth>
        <Login />
      </LoginAuth>
      } />
      <Route
        path="/*"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      />
      <Route path="*" element={<div>adfdff</div>} />
    </Routes>
  </Router>
  );
}

function RequireAuth({children}) {
  // let auth = useSelector(selectLoggedIn);
  let auth = false;

  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginAuth({children}) {
  // let auth = useSelector(selectLoggedIn);
  let auth = false;

  let location = useLocation();

  if (auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}


export default App;
