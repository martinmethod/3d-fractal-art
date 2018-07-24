// =========================| Slider arrow |========================= //



//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import './slider-arrow.scss';


//--------------------------| Body

const SliderArrow = props => (
  <a
    className='pa-slider-arrow'
    data-direction={props.direction}
    title={props.title}
    onClick={props.onClick}
  >
    <span/>
  </a>
);


//--------------------------| Export

export default SliderArrow;
