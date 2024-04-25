import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import ShoppingCartContextProvider from './context/ShoppingCartContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ShoppingCartContextProvider>
        <Router>
          <App />
        </Router>
      </ShoppingCartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);