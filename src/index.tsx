import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"

import reportWebVitals from '~/reportWebVitals';
import App from '~/App';
import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <AlertProvider template={AlertTemplate} timeout={3000} offset='2rem' >
    <Router basename='/' >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </AlertProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
