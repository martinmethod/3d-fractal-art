// =========================| Gallery |========================= //



define([
  'galleryScene',
  'galleryDescription',
  'galleryNav',
  'galleryArrows',
  'contentPrinter'
],
function(Scene, Description, Nav, Arrows, printContent) {

  'use strict';

  var modifyData = function(data) {
        for (var cat in data) {
          var category = data[cat],
            models = category.models;

          for(var m = 0; m < models.length; m++) {
            var model = models[m];

            $.extend(model, {
              category: category.name,
              prevItem: m === 0 ? models[models.length - 1].name : models[m - 1].name,
              nextItem: m === models.length - 1 ? models[0].name : models[m + 1].name,
              storeURL: category.name === 'culinary' ?
                model.storeURL = 'https://sketchfab.com/models/' + model.code :
                model.storeKey ?
                  'https://www.shapeways.com/product/' + model.storeKey :
                  null,
              navItem: $('<a class="model-trigger">' + model.title + '</a>'),
              thumb: $('<img src="images/thumbs/' + category.name + '/' + model.name + '.png">'),
              exampleURL: model.example ? 'images/examples/' + category.name + '/' + model.name + '.jpg' : null
            });
          }
        }

        return data;
      };

  return function(data, settings) {

    var gallery = this;

    // Modify all models to contain
    // category, prevItem, nextItem & storeURL (if such)
    data = modifyData(data);

    // Enrich the Gallery object
    $.extend(gallery, $('<div class="gallery">'), {

      scene: new Scene(),
      description: new Description(),
      arrows: new Arrows(),
      nav: new Nav(data),

      getInitialModel: function() {
        var hash = window.location.hash ? window.location.hash : null,
            hashCategory = hash ? hash.split('_')[0].substring(1): null,
            hashModel = hash ? hash.substring(hash.indexOf('_') + 1): null,
            hashObject = hash ? gallery.getModelByName(hashCategory, hashModel) : null,
            defaultCategory = settings.defaultCategory,
            defaultModel = settings.defaultModel,
            storageModel = localStorage.initialModel ? JSON.parse(localStorage.initialModel) : null;

        return hashObject ?
                 hashObject :
                  storageModel ?
                   this.getModelByName(storageModel.category, storageModel.model) :
                   this.getModelByIndex(defaultCategory, defaultModel);
      },

      getCategoryIndex: function(cat) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].name === cat) {
            break;
          }
        }

        return i;
      },

      getCategoryTitle: function(cat) {
        for (var c in data) {
          if (data[c].name === cat) {
            cat = data[c].title;
            break;
          }
        }

        return cat;
      },

      getModelByIndex: function(cat, model) {
        return data[cat].models[model];
      },

      getModelByName: function(categoryName, modelName) {
        var model,
            category;

        for (var c in data) {
          if (data[c].name === categoryName) {
            category = data[c];
            break;
          }
        }

        for (var m = 0; m < category.models.length; m++) {
          if (category.models[m].name === modelName) {
            model = category.models[m];
            break;
          }
        }

        return model;
      }

    }); // extend


    // Define event handlers
    var events = [
          {
            target: gallery,
            eventHandlers: {
              setModel: function(e, model) {
                localStorage.initialModel = JSON.stringify({category: model.category, model: model.name});
                window.location.hash = model.category + '_' + model.name;

                gallery.currentCategory = model.category;
                gallery.currentModel = model;
                gallery.prevModel = gallery.getModelByName(model.category, model.prevItem);
                gallery.nextModel = gallery.getModelByName(model.category, model.nextItem);

                gallery.arrows.setTargets(gallery.prevModel, gallery.nextModel);
                gallery.nav.setActiveItem(model, gallery.getCategoryIndex(gallery.currentCategory));
                gallery.scene.loadModel(model);
                gallery.description.setContent(model);
              }
            }
          },
          {
            target: gallery.scene,
            eventHandlers: {
              loadModelStarted: function() {
                gallery.description.moveOut();
              },
              loadModelFinished: function() {
                gallery.description.moveIn();
              }
            }
          },
          {
            target: gallery.arrows.arrow,
            eventHandlers: {
              click: function(e) {
                gallery.trigger('setModel', e.currentTarget.model);
              }
            }
          },
          {
            target: gallery.nav.items,
            eventHandlers: {
              click: function(e) {
                var model = gallery.getModelByName(e.currentTarget.category, e.currentTarget.model);

                gallery.trigger('setModel', model);
              }
            }
          }
        ];


    // Bind events
    if (events) {
      for (var i in events) {
        for (var e in events[i].eventHandlers) {
          events[i].target.bind(e, events[i].eventHandlers[e]);
        }
      }
    }


    // Print the content
    printContent(gallery, [
      gallery.scene,
      gallery.description,
      gallery.arrows,
      gallery.nav
    ]);


  }; // return constructor function

}); // define
