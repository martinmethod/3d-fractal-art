// =========================| Facebook |========================= //



//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './facebook.scss';

// Data
import { facebook } from '../../../../data/config.json';


//--------------------------| Body


const Facebook = props => (
  <a
    className='pa-facebook'
    href={facebook.controllerURL}
    target='_blank'
    rel='noopener noreferrer'
    title={facebook.tooltipText}
  >
  </a>
);


//--------------------------| Export

export default Facebook;
