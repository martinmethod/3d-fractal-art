// =========================| Reducers: Player |========================= //



//--------------------------| Import

import { player } from '../../data/config.json';


//--------------------------| Default state

const localState = JSON.parse(localStorage.getItem('state'));
const playerReducerDefaultState = localState && localState.player ?
  localState.player :
  {
    mode: '',
    controllerTooltipText: player.mode === 'play' ?
      player.controllerTooltipText.pause :
      player.controllerTooltipText.play
  };


//--------------------------| Export

export default (state = playerReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'PLAY':
      return {
        mode: 'play',
        controllerTooltipText: player.controllerTooltipText.pause
      };

    case 'PAUSE':
      return {
        mode: 'pause',
        controllerTooltipText: player.controllerTooltipText.play
      };
  }
};
