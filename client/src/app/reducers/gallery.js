//====================================================|
// REDUCERS: GALLERY


//--------------------------| Import

import { getModelById, getModelByName } from '../helpers/models';
import { models } from '../../data/models.json';


//--------------------------| Default state

const defaultModel = '9ebc0b00fa974e91a6123afb3ba27757'; // Autumn, Wall Art

const hashModel = window.location.hash ?
  getModelByName({
    catName: window.location.hash.split('_')[0].substring(1),
    modelName: window.location.hash.substring(window.location.hash.indexOf('_') + 1)
  }) :
  null;

const localState = JSON.parse(localStorage.getItem('state'));
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
      id: defaultModel, // Autumn, Wall Art
      model: getModelById(defaultModel),
      loaded: false
    };


//--------------------------| Export

export default (state = galleryReducerDefaultState, action) => {
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
