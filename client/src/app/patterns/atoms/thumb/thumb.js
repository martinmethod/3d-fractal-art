//====================================================|
// ATOMS: THUMB


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

// Styles
import styles from './thumb.scss';

// Data
import { models } from '../../../../data/models.json';


//--------------------------| Body

const Thumb = props => (
  <div className={styles.root}>
    {
      models.map(cat => cat.models.map(m => (
        <img
          key={m.id}
          src={`images/thumbs/${cat.name}/${m.name}.png`}
          className={classNames(styles.image, {
            [styles.active]: m.id === props.active,
            [styles.current]: m.id === props.model.id
          })}
        />
      )))
    }
  </div>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  model: state.gallery.model
});


//--------------------------| Export

export default connect(mapStateToProps)(Thumb);
