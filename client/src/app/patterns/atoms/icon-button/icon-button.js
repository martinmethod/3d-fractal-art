//====================================================|
// ATOMS: ICON BUTTON


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './icon-button.scss';


//--------------------------| Body

const IconButton = ({
  active,
  role,
  mode,
  onClick,
  title,
  className
}) => (
  <a
    className={`${styles.root} ${className}`}
    data-active={active}
    data-role={role}
    data-mode={mode}
    onClick={onClick}
    title={title}
  >
    <span className={styles.glyph} />
  </a>
);


//--------------------------| Export

export default IconButton;
