// =========================| Author |========================= //



//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Actions
import changePopoverState from '../actions/popover';

// Atoms
import IconButton from '../patterns/atoms/icon-button';

// Data
import { author } from '../../data/config.json';


//--------------------------| Body

const AuthorController = props => (
  <IconButton
    role='author'
    title={author.title}
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
