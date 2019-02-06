//====================================================|
// ORGANISMS: DESCRIPTION BOX


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';

// Services
import { getStoreUrl } from '../../../services/data';

// Styles
import 'react-image-lightbox/style.css';
import lightbox from '../../../../styles/external/lightbox.scss';
import styles from './description-box.scss';
import textStyles from '../../molecules/text/text.scss';

// Atoms
import Button from '../../atoms/button';

// Molecules
import Text from '../../molecules/text';


//--------------------------| Body

class DescriptionBox extends React.PureComponent {
  state = {
    isLightboxOpen: false
  };

  render() {
    const { isLightboxOpen } = this.state;
    const {
      title,
      example,
      description,
      storeKey
    } = this.props.model;

    return (
      <div className={styles.root} data-loaded={this.props.loaded}>
        <div className='content'>
          <Text className={styles.text}>
            <p className={textStyles.paragraph}>{description}</p>
            {
              example &&
              <Button
                className={styles.button}
                type='light'
                onClick={() => this.setState(() => ({ isLightboxOpen: true }))}
              >
                See example
              </Button>
            }
            {
              example && isLightboxOpen && (
                <Lightbox
                  enableZoom={false}
                  mainSrc={example.fields.file.url}
                  onCloseRequest={() => this.setState(() => ({ isLightboxOpen: false }))}
                  imageTitle={title}
                />
              )
            }
            {
              storeKey &&
              <Button
                className={styles.button}
                external
                href={getStoreUrl(storeKey)}
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
