// =========================| Description box |========================= //



//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';

// Styles
import 'react-image-lightbox/style.css';
import '../../../../styles/external/lightbox.scss';
import './description-box.scss';

// Atoms
import Button from '../../../patterns/atoms/button';

// Molecules
import Text from '../../../patterns/molecules/text';

// Data
import { gallery } from '../../../../data/config.json';


//--------------------------| Body

class DescriptionBox extends React.Component {
  state = {
    isLightboxOpen: false
  };

  render() {
    const { isLightboxOpen } = this.state;
    const {
      name,
      title,
      category,
      example,
      description,
      storeKey
    } = this.props.model;

    return (
      <div className='po-description-box' data-loaded={this.props.loaded}>
        <div className='content'>
          <Text>
            <p>{description}</p>
            {
              example &&
              <Button
                block
                type='pa-button-type-light'
                onClick={() => this.setState(() => ({ isLightboxOpen: true }))}
              >
                See example
              </Button>
            }
            {
              example && isLightboxOpen && (
                <Lightbox
                  enableZoom={false}
                  mainSrc={`images/examples/${category}/${name}.jpg`}
                  onCloseRequest={() => this.setState(() => ({ isLightboxOpen: false }))}
                  imageTitle={title}
                />
              )
            }
            {
              storeKey &&
              <Button
                block
                external
                href={gallery.storeUrl + storeKey}
              >
                Buy now
              </Button>
            }
          </Text>
        </div>
      </div>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  model: state.gallery.model,
  loaded: state.gallery.loaded
});


//--------------------------| Export

export default connect(mapStateToProps)(DescriptionBox);