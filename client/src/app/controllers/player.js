//====================================================|
// CONTROLLERS: PLAYER


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Actions
import { playMusic, pauseMusic } from '../actions/player';

// Atoms
import IconButton from '../patterns/atoms/icon-button';


//--------------------------| Body

const PlayerController = props => (
  <IconButton
    role='player'
    className={props.className}
    title={props.player.controllerTooltipText}
    mode={props.player.mode}
    onClick={() => {
      const action = props.player.mode === 'play' ? pauseMusic : playMusic;
      props.dispatch(action());
    }}
  />
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  player: state.player
});


//--------------------------| Export

export default connect(mapStateToProps)(PlayerController);
