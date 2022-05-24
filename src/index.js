import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { DrawerProvider } from './contextApi/DrawerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DrawerProvider>
      <Router>
        <App />
      </Router>
    </DrawerProvider>
  </React.StrictMode>,
);
