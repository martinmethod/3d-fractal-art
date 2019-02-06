//====================================================|
// ATOMS: X-BUTTON


//--------------------------| Import

// Libraries
import React from 'react';

// System
import { closeLabel } from '../../../../system/labels.json';

// Styles
import styles from './x-button.scss';


//--------------------------| Body


const XButton = ({ onClick, className }) => (
  <a
    className={`${styles.root} ${className} link`}
    onClick={onClick}
    title={closeLabel}
  >
    ✕
  </a>
);


//--------------------------| Export

export default XButton;
