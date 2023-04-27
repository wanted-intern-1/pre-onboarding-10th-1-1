import React from 'react';
import Todo from './pages/Todo';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Sign from './pages/Sign';

const routes = createRoutesFromElements(
  <Route element={<ProtectedRoute />}>
    <Route path="/*" element={<Navigate to="signin" />} />
    <Route path="/signin" element={<Sign type="SignIn" />} />
    <Route path="/signup" element={<Sign type="SignUp" />} />
    <Route path="/todo" element={<Todo />} />
  </Route>
);

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
