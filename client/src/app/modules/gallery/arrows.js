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

// Services
import { getPrevModel, getNextModel } from '../../services/data';


//--------------------------| Body

const Arrows = ({ model, loaded, dispatch }) => {
  const prevModel = getPrevModel(model.id);
  const nextModel = getNextModel(model.id);

  return (
    <div className={styles.root} data-loaded={loaded}>
      <SliderArrow
        direction='previous'
        title={prevModel.title}
        onClick={() => {
          dispatch(loadModel(prevModel.id));
        }}
      />
      <SliderArrow
        direction='next'
        title={nextModel.title}
        onClick={() => {
          dispatch(loadModel(nextModel.id));
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
