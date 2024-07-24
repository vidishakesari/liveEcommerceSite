import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Context/ProductContext';
import { FilterContextProvider } from './Context/FilterContext';
import { CardContextProvider } from './Context/CardContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
    domain="dev-yiik4tcxtmcxkqwi.us.auth0.com"
    clientId="DYM2jTZ5zCT6n92jLoPitPY1WfMFTq0o"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
  <FilterContextProvider>
  <CardContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CardContextProvider>
  </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
