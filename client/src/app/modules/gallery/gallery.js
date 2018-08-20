//====================================================|
// MODULES: GALLERY


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './gallery.scss';

// Components
import Arrows from './arrows';

// Organisms
import Scene from '../../patterns/organisms/scene';
import Nav from '../../patterns/organisms/nav';
import DescriptionBox from '../../patterns/organisms/description-box';


//--------------------------| Body

const Gallery = () => (
  <section className={styles.root}>
    <Arrows />
    <Scene />
    <DescriptionBox />
    <Nav />
  </section>
);


//--------------------------| Export

export default Gallery;
