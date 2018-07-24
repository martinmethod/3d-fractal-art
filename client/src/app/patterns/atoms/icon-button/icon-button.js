// =========================| Icon button |========================= //



//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './icon-button.scss';


//--------------------------| Body


const IconButton = props => (
  <a
    className='pa-icon-button'
    data-active={props.active}
    data-role={props.role}
    data-mode={props.mode}
    onClick={props.onClick}
    title={props.title}
  >
    <span className='glyph' />
  </a>
);


//--------------------------| Export

export default IconButton;
