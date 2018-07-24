// =========================| Author stage |========================= //



define([
  'authorData',
  'contentPrinter'
],
function(data, printContent) {

  'use strict';

  return function() {

    var stage = this;


    // Enrich the Stage object
    $.extend(stage, $('<div class="stage popover" />'), {

      closeBtn: $('<label class="x-close link" for="author-input">✕</label>'),

      title: $('<h2 class="ttl">Artist statement</h2>'),

      content: $('<div class="txt scrollbar" />'),

      photo: $('<img src="' + data.photoSrc + '" alt="' + data.name + '" />'),

      signature: $('<p class="signature">— <a href="mailto:'+ data.email +'">' + data.name + '</a></p>')

    }); // extend


    // Print the content
    stage.content.append(stage.photo);

    for (var p = 0; p < data.text.length; p++) {
      stage.content.append('<p>' + data.text[p] + '</p>');
    }

    stage.content.append(stage.signature);

    printContent(stage, [
      stage.closeBtn,
      stage.title,
      stage.content
    ]);


  }; // return constructor function

}); // define
