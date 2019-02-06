//====================================================|
// CONTROLLERS: GALLERY


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Actions
import changePopoverState from '../actions/popover';

// Atoms
import IconButton from '../patterns/atoms/icon-button';

// System
import { navLabel } from '../../system/labels.json';


//--------------------------| Body

const GalleryController = props => (
  <IconButton
    role='gallery'
    className={props.className}
    title={navLabel}
    active={props.popover.active === 'nav'}
    onClick={() => {
      if (props.popover.active !== 'nav') {
        props.dispatch(changePopoverState('nav'));
      }
      else {
        props.dispatch(changePopoverState(''));
      }
    }}
    {...props}
  />
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  popover: state.popover
});


//--------------------------| Export

export default connect(mapStateToProps)(GalleryController);
