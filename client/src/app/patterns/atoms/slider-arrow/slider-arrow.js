//====================================================|
// ATOMS: SLIDER ARROW


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './slider-arrow.scss';


//--------------------------| Body

const SliderArrow = props => (
  <a
    className={styles.root}
    data-direction={props.direction}
    title={props.title}
    onClick={props.onClick}
  >
    <span/>
  </a>
);


//--------------------------| Export

export default SliderArrow;
