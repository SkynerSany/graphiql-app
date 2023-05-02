import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/app/app';
import { BrowserRouter } from 'react-router-dom';
import './main.scss';
import { Provider } from 'react-redux';
import store from '../store/store';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
