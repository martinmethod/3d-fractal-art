//====================================================|
// SERVICES: DATA


//--------------------------| Import

// Libraries
import { parse } from 'flatted/esm';

// System
import { gallery } from '../../system/labels.json';


//--------------------------| Get content

const getContent = () => parse(localStorage.getItem('art_content'));


//--------------------------| Get author

export const getAuthor = () => getContent().fields.author;


//--------------------------| Get categories

export const getCategories = () => getContent().fields.categories;


//--------------------------| Get category by model ID

export const getCategoryByModelId = (id) => {
  const categories = getCategories();

  let cat;
  for (let i = 0; i < categories.length; i += 1) {
    if (categories[i].fields.fractals.find(m => m.fields.id === id)) {
      cat = categories[i];
      break;
    }
  }

  return cat.fields;
};


//--------------------------| Get model by ID

export const getModelById = id => getCategoryByModelId(id).fractals.find(
  m => m.fields.id === id
).fields;


//--------------------------| Get model by name

export const getModelByName = ({ catName, modelName }) => {
  const category = getCategories().find(cat => cat.fields.id === catName).fields.fractals;

  return category.find(m => m.fields.name === modelName).fields;
};


//--------------------------| Get product URL

export const getProductUrl = id => getContent().fields.productUrl.replace('{{id}}', id);


//--------------------------| Get store URL

export const getStoreUrl = key => getContent().fields.storeUrl + key;


//--------------------------| Get previous model

export const getPrevModel = (id) => {
  const category = getCategoryByModelId(id);

  const currentIndex = category.fractals.indexOf(category.fractals.find(m => m.fields.id === id));

  return category.fractals[
    currentIndex > 0 ? currentIndex - 1 : category.fractals.length - 1
  ].fields;
};


//--------------------------| Get next model

export const getNextModel = (id) => {
  const category = getCategoryByModelId(id);

  const currentIndex = category.fractals.indexOf(category.fractals.find(m => m.fields.id === id));

  return category.fractals[
    currentIndex < category.fractals.length - 1 ? currentIndex + 1 : 0
  ].fields;
};
