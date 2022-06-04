import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { DrawerProvider } from './contextApi/DrawerContext';
import './i18n';
//redux connection
import { Provider } from 'react-redux';
import { store } from './store';

//chakra
import { ThemeProvider as ChakraProvider, CSSReset } from '@chakra-ui/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <DrawerProvider>
          <Router>
            <CSSReset />
            <App />
          </Router>
        </DrawerProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
