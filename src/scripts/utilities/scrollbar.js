// =========================| Utilities: Custom scrollbar |========================= //



define(function() {

  'use strict';

  return {

    set: function(target) {
      target.mCustomScrollbar({
        axis: 'y',
        autoHideScrollbar: true
      });

      return target;
    }

  }; // return

}); // define
