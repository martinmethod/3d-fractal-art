//====================================================|
// ATOMS: TITLE


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Services
import { getCategoryByModelId } from '../../../services/data';

// Actions
import changePopoverState from '../../../actions/popover';

// Styles
import styles from './title.scss';


//--------------------------| Body


const Title = ({
  title,
  model,
  popover,
  dispatch
}) => {
  const category = getCategoryByModelId(model.id);

  return (
    <h1 className={styles.root}>
      <a
        className={styles.link}
        onClick={() => {
          if (popover.active !== 'nav') {
            dispatch(changePopoverState('nav'));
          }
          else {
            dispatch(changePopoverState(''));
          }
        }}
      >{`${title}: ${category.title}`}</a>
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
