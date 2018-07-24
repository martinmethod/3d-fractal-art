// =========================| Utilities: Content printer |========================= //



define(function() {

  'use strict';

  return function(parent, components) {

    for (var c in components) {
      parent.append(components[c]);
    }

    return parent;

  }; // return

}); // define
