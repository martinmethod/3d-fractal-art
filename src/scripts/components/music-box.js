// =========================| Music Box |========================= //



define([
  'musicPlayer',
  'musicController',
  'contentPrinter'
],
function(Player, Controller, printContent) {

  'use strict';

  var defaultSettings = {
        state: localStorage.musicBox ? localStorage.musicBox : 'play',
        autoplay: true,
        loop: true,
        source: 'audio/music.mp3'
      };

  return function(settings) {

    var musicBox = this;


    // Overwrite default settings
    settings = $.extend(defaultSettings, settings);


    // Enrich the Controller object
    $.extend(musicBox, $('<div class="music-box">'), {

      player: new Player(settings),

      controller: new Controller(),

      settings: settings,

      setState: function(state) {
        musicBox.settings.state = localStorage.musicBox = state ?
                                    state :
                                    musicBox.settings.state;

        musicBox.controller.attr('title',
          (musicBox.settings.state === 'play' ? 'Pause' : 'Play') + ' the music'
        );

        musicBox.trigger('changeState');

        return musicBox;
      }

    }); // extend


    // Bind events
    musicBox.controller.click(function() {
      musicBox.setState(musicBox.settings.state === 'pause' ? 'play' : 'pause');
    });

    musicBox.bind('changeState', function() {
      musicBox.player[0][musicBox.settings.state]();
      musicBox.controller.attr('data-state', musicBox.settings.state);
    });


    // Set initial state
    musicBox.setState(musicBox.settings.state);


    // Print the content
    printContent(musicBox, [
      musicBox.player,
      musicBox.controller
    ]);


  }; // return constructor function

}); // define
