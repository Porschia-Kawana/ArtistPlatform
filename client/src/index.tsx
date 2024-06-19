import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import LandingPage from './pages/public';
import Portfolio from './pages/portfolio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-4zsfzx6frjtbn52k.us.auth0.com"
        clientId="afl2b8LXGMtfZA2hRiPLBEBCZLKicfM9"
        authorizationParams={{
          redirect_uri: window.location.origin + '/portfolio'
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/events" />
          <Route path="/forum" />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
