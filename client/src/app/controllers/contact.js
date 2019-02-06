//====================================================|
// CONTROLLERS: CONTACT


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { getAuthor } from '../services/data';

// System
import { contactLabel } from '../../system/labels.json';

// Atoms
import IconButton from '../patterns/atoms/icon-button';


//--------------------------| Body

const ContactController = props => (
  <IconButton
    role='contact'
    className={props.className}
    title={contactLabel}
    onClick={() => {
      window.location.href = `mailto:${getAuthor().fields.email}`;
    }}
    {...props}
  />
);


//--------------------------| Export

export default ContactController;
