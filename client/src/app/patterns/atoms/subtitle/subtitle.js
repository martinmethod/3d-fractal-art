//====================================================|
// ATOMS: SUBTITLE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './subtitle.scss';


//--------------------------| Body


const Subtitle = props => (
  <h2 className={styles.root}>
    {props.children}
  </h2>
);


//--------------------------| Export

export default Subtitle;
