import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import About from './pages/About.tsx';
import News from './pages/News.tsx';
import Posts from './pages/Posts.tsx';
import GroceryList from './pages/GroceryList.tsx';
import Home from './pages/Home.tsx';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Todos from './components/todoapp/Todos';
import AddTodo from './components/todoapp/AddTodo';
import ProtectedRoute from './components/auth/ProtectedRoute';

import { AuthContextProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'news', element: <News /> },
      { path: 'posts', element: <Posts /> },
      { path: 'grocery', element: <GroceryList /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: 'todos', element: <Todos /> },
          { path: 'addtodo', element: <AddTodo /> },
        ],
      },

      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </AuthContextProvider>
  </React.StrictMode>
);
