// =========================| Gallery arrows |========================= //



define([
  'contentPrinter'
],
function(printContent) {

  'use strict';

  var arrowTemplate = $('<a class="controller"><span></span></a>'),
      prevArrow = arrowTemplate.clone().addClass('prev'),
      nextArrow = arrowTemplate.clone().addClass('next'),
       anyArrow = prevArrow.add(nextArrow);

  return function() {

    var arrows = this;


    // Enrich the Arrows object
    $.extend(arrows, $('<div class="arrows">'), {

      arrow: anyArrow,
      prev: prevArrow,
      next: nextArrow,

      setTargets: function(prevModel, nextModel) {
        arrows.prev.attr('title', prevModel.title)[0].model = prevModel;
        arrows.next.attr('title', nextModel.title)[0].model = nextModel;
      }

    }); // extend


    // Print the content
    printContent(arrows, [
      arrows.prev,
      arrows.next
    ]);


  }; // return constructor function

}); // define
