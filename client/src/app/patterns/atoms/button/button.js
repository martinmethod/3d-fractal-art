//====================================================|
// ATOMS: BUTTON


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import './button.scss';
import '../../../../styles/tokens/display.scss';


//--------------------------| Body


const Button = (props) => {
  const classes = classNames('pa-button', props.type, {
    db: props.block
  });

  const attributes = {};
  if (props.external) {
    attributes.target = '_blank';
    attributes.rel = 'noopener noreferrer';
  }

  return (
    <a
      className={classes}
      href={props.href}
      onClick={props.onClick}
      {...attributes}
    >
      {props.children}
    </a>
  );
};


//--------------------------| Export

export default Button;
