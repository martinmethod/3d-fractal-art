//====================================================|
// ATOMS: BUTTON


//--------------------------| Import

// Libraries
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './button.scss';
import '../../../../styles/tokens/display.scss';


//--------------------------| Body

const Button = ({
  type,
  block,
  external,
  href,
  onClick,
  children
}) => {
  const classes = classNames(styles.root, {
    db: block
  });

  const attributes = {};
  if (external) {
    attributes.target = '_blank';
    attributes.rel = 'noopener noreferrer';
  }

  return (
    <a
      className={classes}
      href={href}
      data-type={type}
      onClick={onClick}
      {...attributes}
    >
      {children}
    </a>
  );
};


//--------------------------| Export

export default Button;
