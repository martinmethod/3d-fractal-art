//====================================================|
// ATOMS: SIGNATURE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './signature.scss';


//--------------------------| Body


const Signature = props => (
  <p className='pa-signature'>
    {props.children}
  </p>
);


//--------------------------| Export

export default Signature;
