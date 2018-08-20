//====================================================|
// ATOMS: SIGNATURE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './signature.scss';


//--------------------------| Body


const Signature = props => (
  <p className={styles.root}>
    {props.children}
  </p>
);


//--------------------------| Export

export default Signature;
