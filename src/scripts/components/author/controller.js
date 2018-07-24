// =========================| Author controller |========================= //



define(function() {

  'use strict';

  return function() {

    var controller = this;


    // Enrich the Controller object
    $.extend(controller, $(
      '<input class="popover-toggle" id="author-input" type="checkbox" name="popover">' +
      '<label class="input-controller controller-icon" for="author-input" title="Artist statement">' +
        '<span></span>' +
      '</label>'));


  }; // return constructor function

}); // define
