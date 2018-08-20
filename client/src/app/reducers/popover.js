//====================================================|
// REDUCERS: POPOVER


//--------------------------| Default state

const localState = JSON.parse(localStorage.getItem('state'));
const popoverReducerDefaultState = localState && localState.popover ?
  localState.popover :
  { active: '' };


//--------------------------| Export

export default (state = popoverReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'CHANGE_POPOVER_STATE':
      return {
        active: action.popover
      };
  }
};
