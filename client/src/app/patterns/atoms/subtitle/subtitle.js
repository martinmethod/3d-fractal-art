//====================================================|
// ATOMS: SUBTITLE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './subtitle.scss';


//--------------------------| Body


const Subtitle = props => (
  <h2 className='pa-subtitle'>
    {props.children}
  </h2>
);


//--------------------------| Export

export default Subtitle;
