//====================================================|
// ATOMS: X-BUTTON


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './x-button.scss';


//--------------------------| Body


const XButton = ({ onClick, className }) => (
  <a
    className={`${styles.root} ${className} link`}
    onClick={onClick}
    title='Close'
  >
    ✕
  </a>
);


//--------------------------| Export

export default XButton;
