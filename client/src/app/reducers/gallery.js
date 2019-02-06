//====================================================|
// REDUCERS: GALLERY


//--------------------------| Import

import { getModelById, getModelByName } from '../services/data';


//--------------------------| Export

export default (initialModel) => {
  // Default state
  const defaultModel = initialModel.fields.id;
  const notAndroidWebapp = window.matchMedia('(display-mode: browser)').matches;
  const notiOSWebapp = !window.navigator.standalone;

  const hashModel = window.location.hash && notiOSWebapp && notAndroidWebapp ?
    getModelByName({
      catName: window.location.hash.split('_')[0].substring(1),
      modelName: window.location.hash.substring(window.location.hash.indexOf('_') + 1)
    }) :
    null;

  const localState = JSON.parse(localStorage.getItem('art_state'));
  const galleryReducerDefaultState = hashModel ? {
    id: hashModel.id,
    model: {
      ...hashModel,
      category: window.location.hash.split('_')[0].substring(1)
    },
    loaded: false
  } :
    localState && localState.gallery ?
      {
        ...localState.gallery,
        loaded: false
      } :
      {
        id: defaultModel,
        model: getModelById(defaultModel),
        loaded: false
      };

  return (state = galleryReducerDefaultState, action) => {
    switch (action.type) {
      default:
        return state;

      case 'LOAD_MODEL':
        if (action.id !== state.id) {
          return {
            ...state,
            id: action.id,
            loaded: false
          };
        }
        return state;

      case 'LOAD_MODEL_INFO':
        return {
          ...state,
          model: getModelById(action.id),
          loaded: true
        };
    }
  };
};
