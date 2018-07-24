// =========================| Gallery navigation |========================= //



define([
  'contentPrinter',
  'scrollbar'
],
function(printContent, scrollbar) {

  'use strict';

  var navItemHover = function(model) {
        model.navItem.hover(
          function() { model.thumb.addClass('active'); },
          function() { model.thumb.removeClass('active'); }
        );

        return model;
      };

  return function(data) {

    var nav = this;

    // Enrich the Nav object
    $.extend(nav, $('<div class="nav">'), {

      controller: $(
        '<input class="popover-toggle" id="nav-input" type="checkbox" name="popover">' +
        '<label class="input-controller controller-icon" for="nav-input" title="List of works">' +
          '<span></span>' +
        '</label>'),
      stage: $('<div class="stage popover">'),
      closeBtn: $('<label class="x-close link" for="nav-input">✕</label>'),
      title: $('<h2 class="ttl">List of works</h2>'),
      thumbHolder: $('<div class="thumb-holder">'),
      menu: $('<nav class="models-nav">'),

      setAccordion: function(activeCategory) {
        nav.menu.accordion({
          active: activeCategory,
          animate: false,
          create: function(event, ui) {
            // Set custom scrollbar to the Navigation box when initialized
            scrollbar.set(ui.panel);
          },
          activate: function(event, ui) {
            // Set custom scrollbar to the Navigation box when new section is chosen
            scrollbar.set(ui.newPanel);
          }
        });

        return nav;
      },

      setActiveItem: function(model, activeCategory) {
        nav.menu.accordion({
          active: activeCategory
        });

        nav.items.add(nav.thumbs).removeClass('current');
        model.navItem.add(model.thumb).addClass('current');

        return nav;
      }

    }); // extend


    // Fill the navigation
    for (var cat in data) {
      var category = data[cat],
          models = category.models,
          label = $('<label class="' + category.name + '">' + category.title + '</label>'),
          section = $('<div class="' + category.name + '"><ul class="models-list"></ul></div>');

      nav.menu.append(label).append(section);

      for (var m in models) {
        var model = models[m];

        if (model.example) {
          var icon = $('<i title="This model has an example">');

          model.navItem.append(icon);
        }

        model.navItem[0].category = category.name;
        model.navItem[0].model = model.name;

        navItemHover(model);

        var listItem = $('<li>').append(model.navItem);
        section.find('ul').append(listItem);
        nav.thumbHolder.append(model.thumb);
      }
    }
    nav.items = nav.menu.find('.model-trigger');
    nav.thumbs = nav.thumbHolder.find('img');


    // Print the content
    printContent(nav.stage, [
      nav.closeBtn,
      nav.title,
      nav.thumbHolder,
      nav.menu
    ]);

    printContent(nav, [
      nav.controller,
      nav.stage
    ]);


  }; // return constructor function

}); // define
