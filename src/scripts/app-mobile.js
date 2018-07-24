// =========================| 3D Fractal Art: Mobile App |========================= //



define(function() {

    'use strict';

    return function() {

      var app = this;


      // Enrich the App object
      $.extend(app, $('<div id="app-mobile">'), {

        videoPlayer: $('<video autoplay loop playsinline><source src="video/art.mp4" type="video/mp4"></video>')

      }); // extend

      $('body').append(
        app.append(
          $('<a href="https://sketchfab.com/3dfractalart" target="_blank">').append(
            app.videoPlayer
          )
        )
      );

    }; // return constructor function

  }); // define
