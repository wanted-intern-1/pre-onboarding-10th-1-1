import React from 'react';
import Todo from './pages/Todo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';

const routes = createRoutesFromElements(
  <Route element={<ProtectedRoute />}>
    <Route path="/*" element={<Navigate to="signin" />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/todo" element={<Todo />} />
  </Route>
);

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
