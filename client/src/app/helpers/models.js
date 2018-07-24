// =========================| Helpers: Models |========================= //



//--------------------------| Import

// Data
import { models } from '../../data/models.json';
import { gallery } from '../../data/config.json';


//--------------------------| Get category by name

export const getCategoryByName = name => models.find(cat => cat.name === name);


//--------------------------| Get category by model ID

export const getCategoryByModelId = (id) => {
  let cat;

  for (let i = 0; i < models.length; i += 1) {
    if (models[i].models.find(m => m.id === id)) {
      cat = models[i];
      break;
    }
  }

  return cat;
};


//--------------------------| Get model by ID

export const getModelById = (id) => {
  let model;

  for (let i = 0; i < models.length; i += 1) {
    model = models[i].models.find(m => m.id === id);

    if (model) {
      model = {
        ...model,
        category: models[i].name
      };
      break;
    }
  }

  return model;
};


//--------------------------| Get model by name

export const getModelByName = ({ catName, modelName }) => models
  .find(cat => cat.name === catName).models
  .find(m => m.name === modelName);


//--------------------------| Get product URL

export const getProductUrl = id => gallery.productUrl.replace('{{id}}', id);


//--------------------------| Get previous model

export const getPrevModel = (id) => {
  const currentCat = models.find(cat => cat.name === getModelById(id).category);
  const currentIndex = currentCat.models.indexOf(currentCat.models.find(m => m.id === id));

  return currentCat.models[currentIndex > 0 ? currentIndex - 1 : currentCat.models.length - 1];
};


//--------------------------| Get next model

export const getNextModel = (id) => {
  const currentCat = models.find(cat => cat.name === getModelById(id).category);
  const currentIndex = currentCat.models.indexOf(currentCat.models.find(m => m.id === id));

  return currentCat.models[currentIndex < currentCat.models.length - 1 ? currentIndex + 1 : 0];
};
