// =========================| Player |========================= //



//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import './player.scss';

// Audio
import audioFile from '../../../assets/audio/music.mp3';


//--------------------------| Body

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  applyMode() {
    this.audioRef.current[this.props.playerMode]();
  }

  componentDidMount() {
    this.applyMode();
  }

  componentDidUpdate() {
    this.applyMode();
  }

  render() {
    return (
      <audio className='module-player' loop='loop' ref={this.audioRef}>
        <source src={audioFile} type='audio/mpeg'/>
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
