import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Create from './Create';
import Navbar from './components/Navbar/Navbar';
import { AppProvider } from './context/AppContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/:id",
  //   element: <Update />,
  // },
  {
    path: "/create",
    element: <Create />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <React.StrictMode>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>CRUD Challange Jurian</h1>
      </div>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);
