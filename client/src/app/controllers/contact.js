//====================================================|
// CONTROLLERS: CONTACT


//--------------------------| Import

// Libraries
import React from 'react';

// Atoms
import IconButton from '../patterns/atoms/icon-button';

// Data
import { contact } from '../../data/config.json';


//--------------------------| Body

const ContactController = props => (
  <IconButton
    role='contact'
    title={contact.controllerTooltipText}
    onClick={() => {
      window.location.href = `mailto:${contact.email}`;
    }}
    {...props}
  />
);


//--------------------------| Export

export default ContactController;
