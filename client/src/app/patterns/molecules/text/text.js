//====================================================|
// MOLECULES: TEXT


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './text.scss';


//--------------------------| Body

const Text = ({ children, className }) => (
  <div className={`${styles.root} ${className}`}>
    {children}
  </div>
);


//--------------------------| Export

export default Text;
