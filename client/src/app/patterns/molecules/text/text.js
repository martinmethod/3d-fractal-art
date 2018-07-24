// =========================| Text |========================= //



//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './text.scss';


//--------------------------| Body

const Text = props => (
  <div className='pm-text'>
    {props.children}
  </div>
);


//--------------------------| Export

export default Text;
