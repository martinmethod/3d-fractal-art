// =========================| Gallery scene |========================= //



define([
  'contentPrinter'
],
function(printContent) {

  'use strict';

  return function() {

    var scene = this;


    // Enrich the Scene object
    $.extend(scene, $('<div class="scene">'), {

      iframe: $('<iframe>', {
        frameborder: 0,
        allow: 'vr',
        allowfullscreen: 'false',
        mozallowfullscreen: 'false',
        webkitallowfullscreen: 'false',
        onmousewheel: ''
      }),

      loadModel: function(model) {
        var url = 'https://sketchfab.com/models/' + model.code + '/embed?autospin=0.7&amp;autostart=1';

        scene.trigger('loadModelStarted');
        scene.iframe.attr('src', url);

        return scene;
      }

    }); // extend


    // Events
    scene.iframe.on('load', function() {
      scene.trigger('loadModelFinished');
    });


    // Print the content
    printContent(scene, [scene.iframe]);


  }; // return constructor function

}); // define
