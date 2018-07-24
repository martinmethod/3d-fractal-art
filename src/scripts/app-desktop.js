// =========================| 3D Fractal Art: Desktop App |========================= //



define([
  'models',
  'author',
  'gallery',
  'musicBox',
  'contentPrinter',
  'scrollbar'
],
function(models, Author, Gallery, MusicBox, printContent, scrollbar) {

  'use strict';

  return function() {

    var app = this,
        defaultCategory = 0,
        defaultModel = 0;


    // Enrich the App object
    $.extend(app, $('#app-desktop'), {

      title: document.title,

      heading: $('.ttl-app'),

      components: {
        author: new Author(),
        gallery: new Gallery(models, {
          defaultCategory: defaultCategory, // Wall Art
          defaultModel: defaultModel // Autumn
        }),
        audioPlayer: new MusicBox({
          id: 'music-box'
        })
      }

    }); // extend


    // Define event handlers
    var events = [
      {
        target: app,
        eventHandlers: {
          changeTitle: function(e, model) {
            var category = app.components.gallery.getCategoryTitle(model.category);

            document.title = model.title + ' – ' + category + ' – ' + app.title;
            app.heading.html(app.title + '<span>: ' + category + '</span>');
          }
        }
      },
      {
        target: app.components.gallery,
        eventHandlers: {
          setModel: function(e, model) {
            app.trigger('changeTitle', model);
          }
        }
      }
    ];


    // Bind events
    if (events) {
      for (var i in events) {
        for (var e in events[i].eventHandlers) {
          events[i].target.bind(e, events[i].eventHandlers[e]);
        }
      }
    }


    // Print the content
    printContent(app, app.components);


    // Set custom scrollbar everywhere it's needed
    scrollbar.set($('.scrollbar'));


    // Set accordion
    app.components.gallery.nav.setAccordion(defaultCategory);


    // Set the initial model
    app.components.gallery.trigger('setModel', app.components.gallery.getInitialModel());


    // Bind events for input controllers
    $('.input-controller').click(function() {
      var $label = $(this);
      if (!$label.prev().is(':checked')) {
        $('.popover-toggle').prop('checked', false);
      }
    });


    // Bind events for popovers
    $('.popover').mouseenter(function() {
      $(this).removeClass('not-focused');
    }).mouseleave(function() {
      var $popover = $(this);
      $(this).addClass('not-focused');

      setTimeout(function() {
        if ($popover.is('.not-focused')) {
          $('.popover-toggle').prop('checked', false);
        }
      }, 3000);
    });


  }; // return constructor function

}); // define
