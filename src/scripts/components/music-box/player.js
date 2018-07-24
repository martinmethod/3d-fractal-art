// =========================| Music player |========================= //



define(function() {

  'use strict';

  return function(settings) {

    var player = this,

        addRemoveAttr = function(flag, name) {
          if (flag) {
            player.attr(name, '');
          }
          else {
            player.removeAttr(name);
          }

          return player;
        },

        setupHandlers = {
          source: function (source) {
            player.html('<source src="' + source + '" type="audio/mpeg">');

            return player;
          },

          autoplay: function (autoplay) {
            return addRemoveAttr(autoplay, 'autoplay');
          },

          loop: function (loop) {
            return addRemoveAttr(loop, 'loop');
          }
        };


    // Enrich the Player object
    $.extend(player, $('<audio>'));


    // Setup the player
    for (var f in setupHandlers) {
      setupHandlers[f](settings[f]);
    }


  }; // return constructor function

}); // define
