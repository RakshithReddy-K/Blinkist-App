import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <Auth0Provider
    domain="dev-sotoykpe.us.auth0.com"
    clientId="YPn5jyF1GEzO09qDqhNyorGuQg3YDt89"
    redirectUri={window.location.origin}
  >
        <App />
</Auth0Provider>,  document.getElementById('root'));
