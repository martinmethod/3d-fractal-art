//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { playMusic } from './actions/player';

// Atoms
import Title from './patterns/atoms/title';
import Subtitle from './patterns/atoms/subtitle';
import FacebookIcon from './patterns/atoms/facebook';

// Molecules
import Toolbar from './patterns/molecules/toolbar';

// Organisms
import Gallery from './modules/gallery';
import Author from './modules/author';
import Player from './modules/player';

// Data
import config from '../data/config.json';
import { controllersList } from '../data/controllers.json';

// Styles
import './app.scss';


//--------------------------| Body

class App extends React.PureComponent {
  defineControllers = () => controllersList.filter(
    controller => config[controller] !== undefined
  );

  state = {
    interaction: false
  };

  render() {
    return (
      <div
        id='app'
        onMouseEnter={() => {
          if (!this.state.interaction) {
            if (this.props.player.mode === '') {
              this.props.dispatch(playMusic());
            }

            this.setState(prevState => ({
              interaction: !prevState.interaction
            }));
          }
        }}
      >
        <header className='head'>
          <Title />
          <Subtitle>{config.subtitle}</Subtitle>
        </header>
        <Toolbar controllers={this.defineControllers()} />
        { config.gallery && <Gallery /> }
        { config.author && <Author /> }
        { config.player && <Player /> }
        { config.facebook && <FacebookIcon /> }
      </div>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  player: state.player
});


//--------------------------| Export

export default connect(mapStateToProps)(hot(module)(App));
