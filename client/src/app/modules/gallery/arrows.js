//====================================================|
// MODULES: GALLERY > ARROWS


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './arrows.scss';

// Atoms
import SliderArrow from '../../patterns/atoms/slider-arrow';

// Actions
import { loadModel } from '../../actions/gallery';

// Helpers
import { getPrevModel, getNextModel } from '../../helpers/models';


//--------------------------| Body

const Arrows = (props) => {
  const prevModel = getPrevModel(props.model.id);
  const nextModel = getNextModel(props.model.id);

  return (
    <div className={styles.root} data-loaded={props.loaded}>
      <SliderArrow
        direction='previous'
        title={prevModel.title}
        onClick={() => {
          props.dispatch(loadModel(prevModel.id));
        }}
      />
      <SliderArrow
        direction='next'
        title={nextModel.title}
        onClick={() => {
          props.dispatch(loadModel(nextModel.id));
        }}
      />
    </div>
  );
};


//--------------------------| State to Props

const mapStateToProps = state => ({
  model: state.gallery.model,
  loaded: state.gallery.loaded
});


//--------------------------| Export

export default connect(mapStateToProps)(Arrows);
