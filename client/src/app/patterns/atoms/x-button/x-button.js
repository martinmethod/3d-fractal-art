// =========================| X-button |========================= //



//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './x-button.scss';


//--------------------------| Body


const XButton = props => (
  <a className='pa-x-button link' onClick={props.onClick} title='Close'>✕</a>
);


//--------------------------| Export

export default XButton;
