import React from 'react';
import HomePage from './routes/Homepage/homePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './components/listPage/listPage.jsx';
import Layout from './components/layout/layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
