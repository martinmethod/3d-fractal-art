//====================================================|
// ATOMS: FACEBOOK


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './facebook.scss';


//--------------------------| Body


const Facebook = ({ data }) => (
  <a
    className={styles.root}
    href={data.url}
    target='_blank'
    rel='noopener noreferrer'
    title={`${data.title} on ${data.name}`}
  >
  </a>
);


//--------------------------| Export

export default Facebook;
