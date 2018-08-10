// =========================| Scene |========================= //



//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import './scene.scss';

// Actions
import { loadModelInfo } from '../../../actions/gallery';

// Helpers
import { getModelById, getProductUrl } from '../../../helpers/models';


//--------------------------| Body

class Scene extends React.Component {
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
    // window.location.hash = `${model.category}_${model.name}`;

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
    return (
      <div className='po-scene'>
        {
          this.state.desktop &&
          <iframe
            frameBorder='0'
            allow='vr'
            allowFullScreen='false'
            mozallowfullscreen='false'
            webkitallowfullscreen='false'
            src={getProductUrl(this.props.id)}
          />
        }
        {
          !this.state.desktop &&
          <img src={`images/models/${getModelById(this.props.id).category}/${getModelById(this.props.id).name}.jpg`} />
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
