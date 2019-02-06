//====================================================|
// MODULES: PLAYER


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './player.scss';


//--------------------------| Body

class Player extends React.PureComponent {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();
  }

  applyMode() {
    this.audioRef.current[this.props.playerMode]();
  }

  componentDidUpdate() {
    this.applyMode();
  }

  render() {
    return (
      <audio
        className={styles.root}
        loop='loop'
        ref={this.audioRef}
      >
        <source src={this.props.source.file.url} type='audio/mpeg'/>
      </audio>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  playerMode: state.player.mode
});


//--------------------------| Export

export default connect(mapStateToProps)(Player);
