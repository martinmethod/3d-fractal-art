// =========================| Author |========================= //



define([
  'authorController',
  'authorStage',
  'contentPrinter'
],
function(AuthorController, AuthorStage, printContent) {

  'use strict';

  return function() {

    var author = this;


    // Enrich the Author object
    $.extend(author, $('<div class="author">'), {

      controller: new AuthorController(),

      stage: new AuthorStage()

    }); // extend


    // Print the content
    printContent(author, [
      author.controller,
      author.stage
    ]);


  }; // return constructor function

}); // define
