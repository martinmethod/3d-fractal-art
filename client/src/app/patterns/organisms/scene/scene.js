//====================================================|
// ORGANISMS: SCENE


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loadModelInfo } from '../../../actions/gallery';

// Services
import { getModelById, getProductUrl, getCategoryByModelId } from '../../../services/data';

// Styles
import styles from './scene.scss';


//--------------------------| Body

class Scene extends React.PureComponent {
  state = {
    desktop: false
  };

  updateDimensions = () => {
    this.setState(() => ({
      desktop: window.innerWidth >= 1024
    }));
  };

  loadModelInfo() {
    const model = getModelById(this.props.id);
    const category = getCategoryByModelId(this.props.id);
    window.location.hash = `${category.id}_${model.name}`;

    const timeout = this.state.desktop ? 5000 : 0;

    setTimeout(() => {
      this.props.dispatch(loadModelInfo(this.props.id));
    }, timeout);
  }

  componentDidMount() {
    this.loadModelInfo();
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentDidUpdate() {
    this.loadModelInfo();
  }

  render() {
    const model = getModelById(this.props.id);

    return (
      <div className={styles.root}>
        {
          this.state.desktop &&
          <iframe
            className={styles.frame}
            frameBorder='0'
            allow='vr'
            allowFullScreen={false}
            mozallowfullscreen='false'
            webkitallowfullscreen='false'
            src={getProductUrl(model.id)}
          />
        }
        {
          !this.state.desktop &&
          <img className={styles.image} src={model.image.fields.file.url} />
        }
      </div>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  id: state.gallery.id
});


//--------------------------| Export

export default connect(mapStateToProps)(Scene);
