// =========================| Title |========================= //



//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import './title.scss';

// Actions
import changePopoverState from '../../../actions/popover';

// Helpers
import { getCategoryByName } from '../../../helpers/models';


//--------------------------| Body


const Title = (props) => {
  const category = getCategoryByName(props.model.category);
  const title = `3D Fractal Art: ${category.title}`;

  return (
    <h1 className='pa-title'>
      <a
        onClick={() => {
        if (props.popover.active !== 'nav') {
          props.dispatch(changePopoverState('nav'));
        }
        else {
          props.dispatch(changePopoverState(''));
        }
      }}
      >{title}</a>
    </h1>
  );
};


//--------------------------| State to Props

const mapStateToProps = state => ({
  popover: state.popover,
  model: state.gallery.model
});


//--------------------------| Export

export default connect(mapStateToProps)(Title);
