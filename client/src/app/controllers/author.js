//====================================================|
// CONTROLLERS: AUTHOR


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Actions
import changePopoverState from '../actions/popover';

// System
import { authorLabel } from '../../system/labels.json';

// Atoms
import IconButton from '../patterns/atoms/icon-button';


//--------------------------| Body

const AuthorController = props => (
  <IconButton
    role='author'
    className={props.className}
    title={authorLabel}
    active={props.popover.active === 'author'}
    onClick={() => {
      if (props.popover.active !== 'author') {
        props.dispatch(changePopoverState('author'));
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

export default connect(mapStateToProps)(AuthorController);
