// =========================| Switchboard A17 |========================= //



//--------------------------| Import

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

// Store
import configureStore from './app/store/configureStore';

// Styles
import './styles/scaffoldings/document.scss';
import './styles/scaffoldings/links.scss';

// Images
import './assets/images/logo.jpg';

// App
import App from './app';


//--------------------------| Body

const root = document.createElement('div');

root.id = 'root';

document.body.appendChild(root);


//--------------------------| State store

const stateStore = configureStore();

stateStore.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(stateStore.getState()));
});


//--------------------------| Render

const jsx = (
  <Provider store={ stateStore }>
    <App />
  </Provider>
);

ReactDOM.render(jsx, root);
