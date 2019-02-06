//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import Div100vh from 'react-div-100vh';

// System
import { modules } from '../system/config.json';

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

// Styles
import styles from './app.scss';


//--------------------------| Body

class App extends React.PureComponent {
  state = {
    interaction: false
  };

  render() {
    const content = this.props.content.fields;

    return (
      <Div100vh>
        <div
          className={styles.root}
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
          <header className={styles.head}>
            <Title title={content.title} />
            <Subtitle>{content.subtitle}</Subtitle>
          </header>
          <Toolbar controllers={modules} />
          {modules.indexOf('gallery') !== -1 && <Gallery />}
          {modules.indexOf('author') !== -1 && <Author data={content.author.fields} />}
          {modules.indexOf('player') !== -1 && <Player source={content.music.fields} />}
          <FacebookIcon data={{
            title: content.title,
            ...content.accounts[0].fields
          }} />
        </div>
      </Div100vh>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  player: state.player
});


//--------------------------| Export

export default connect(mapStateToProps)(hot(module)(App));
