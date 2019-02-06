//====================================================|
// ATOMS: THUMB


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

// Services
import { getCategories } from '../../../services/data';

// Styles
import styles from './thumb.scss';


//--------------------------| Body

const Thumb = ({ model, active }) => (
  <div className={styles.root}>
    {
      getCategories().map(cat => cat.fields.fractals.map(m => (
        <img
          key={m.fields.id}
          src={m.fields.thumb.fields.file.url}
          className={classNames(styles.image, {
            [styles.active]: m.fields.id === active,
            [styles.current]: m.fields.id === model
          })}
        />
      )))
    }
  </div>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  model: state.gallery.id
});


//--------------------------| Export

export default connect(mapStateToProps)(Thumb);
