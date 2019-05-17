//====================================================|
// MATH ART


//--------------------------| Import

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { stringify } from 'flatted/esm';

// Services
import requestContent from './app/services/contentful';

// Store
import configureStore from './app/store/configureStore';

// Styles
import 'normalize.css';
import './styles/scaffoldings/base.scss';
import './styles/scaffoldings/links.scss';
import './styles/scaffoldings/spinner.scss';

// Images
import './assets/images/logo.png';

// App
import App from './app';


//--------------------------| Initialize

const init = async ({
  contentfulAccessToken,
  contentfulSpace,
  gaNumber
}) => {
  try {
    // Store content
    const content = await requestContent(contentfulAccessToken, contentfulSpace);
    localStorage.setItem('art_content', stringify(content));

    // State store
    const stateStore = configureStore(content.fields.initialModel);
    stateStore.subscribe(() => {
      localStorage.setItem('art_state', JSON.stringify(stateStore.getState()));
    });

    // Google Analytics (only for production)
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(gaNumber);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    // Render
    ReactDOM.render((
      <Provider store={ stateStore }>
        <App content={content} />
      </Provider>
    ), document.getElementById('root'));
  }
  catch (error) {
    console.error('No content found', error);
    // TODO: Display "No content found"
  }
};


//--------------------------| Export

export default init;
