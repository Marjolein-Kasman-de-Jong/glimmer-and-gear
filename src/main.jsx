import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import CategoryContextProvider from './context/CategoryProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </Router>
  </React.StrictMode>,
);