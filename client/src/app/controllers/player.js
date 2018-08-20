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

const PlayerController = ({ dispatch, player }) => (
  <IconButton
    role='player'
    title={player.controllerTooltipText}
    mode={player.mode}
    onClick={() => {
      const action = player.mode === 'play' ? pauseMusic : playMusic;
      dispatch(action());
    }}
  />
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  player: state.player
});


//--------------------------| Export

export default connect(mapStateToProps)(PlayerController);
