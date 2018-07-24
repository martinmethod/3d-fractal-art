// =========================| Gallery description |========================= //



define([
  'contentPrinter'
],
function(printContent) {

  'use strict';

  return function() {

    var description = this;


    // Enrich the Description object
    $.extend(description, $('<div class="description loading">'), {

      content: $('<div class="content txt">'),

      example: $('<a class="btn btn-type-light db">See example</a>'),

      text: $('<p>'),

      buyBtn: $('<a class="btn db" target="_blank">Buy now</a>'),

      setContent: function(model) {
        setTimeout(function() {
          description.content.html('');

          description.content.append(description.text.text(model.description));

          if (model.example) {
            description.example
              .attr('href', model.exampleURL)
              .attr('data-lightbox', model.name);

            description.content.append(description.example);
          }

          if (model.storeURL) {
            description.buyBtn.attr('href', model.storeURL);
            description.content.append(description.buyBtn);
          }
        }, 3000);

        return description;
      },

      moveIn: function() {
        setTimeout(function() {
          description.removeClass('loading');
        }, 3000);
      },

      moveOut: function() {
        description.addClass('loading');
      }

    }); // extend


    // Print the content
    printContent(description, [description.content]);


  }; // return constructor function

}); // define
