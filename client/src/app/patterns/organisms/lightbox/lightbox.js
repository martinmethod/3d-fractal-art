//====================================================|
// ORGANISMS: LIGHTBOX


//--------------------------| Import

// Libraries
import React from 'react';
import Lightbox from 'react-images';

// Styles
import styles from './lightbox.scss';


//--------------------------| Body

export default class Sample extends React.PureComponent {
  render() {
    return (
      <Lightbox
        images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}
