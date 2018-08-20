//====================================================|
// MOLECULES: TOOLBAR


//--------------------------| Import

// Libraries
import React from 'react';

// Controllers
import AuthorController from '../../../controllers/author';
import ContactController from '../../../controllers/contact';
import GalleryController from '../../../controllers/gallery';
import PlayerController from '../../../controllers/player';

// Styles
import styles from './toolbar.scss';


//--------------------------| All controllers

const allControllers = {
  author: AuthorController,
  contact: ContactController,
  gallery: GalleryController,
  player: PlayerController
};


//--------------------------| Body

const Toolbar = (props) => {
  const controllers = props.controllers.map(controller => allControllers[controller]);

  return (
    <div className={styles.root}>
      {
        controllers.map((Controller, index) => (
          <Controller
            className={styles.iconButton}
            key={index}
          />
        ))
      }
    </div>
  );
};


//--------------------------| Export

export default Toolbar;
