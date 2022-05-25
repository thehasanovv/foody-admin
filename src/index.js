import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { DrawerProvider } from './contextApi/DrawerContext';
//redux connection
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DrawerProvider>
        <Router>
          <App />
        </Router>
      </DrawerProvider>
    </Provider>
  </React.StrictMode>,
);
