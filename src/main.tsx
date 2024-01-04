import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import ChangePasswordForm from './changePassword/ChangePasswordForm.tsx';
//import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/changePassword', element: <ChangePasswordForm /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
