// =========================| Production config |========================= //

/*
 * The first JS file to be loaded.
 * Takes care of setting up all of the required paths.
 */


define('jquery', [], function () {
  return jQuery;
});


//--------------------------| Configuration

requirejs.config({
  paths: {
    // App
    appDesktop:         'app-desktop',
    appMobile:          'app-mobile',

    // Data
    models:             'data/models',
    authorData:         'data/author',

    // Author
    author:             'components/author',
    authorStage:        'components/author/stage',
    authorController:   'components/author/controller',

    // Gallery
    gallery:            'components/gallery',
    galleryScene:       'components/gallery/scene',
    galleryDescription: 'components/gallery/description',
    galleryNav:         'components/gallery/nav',
    galleryArrows:      'components/gallery/arrows',

    // Music box
    musicBox:           'components/music-box',
    musicPlayer:        'components/music-box/player',
    musicController:    'components/music-box/controller',

    // Utilities
    contentPrinter:     'utilities/content-printer',
    scrollbar:          'utilities/scrollbar'
  }
});


//--------------------------| Initialize page

// Proceed when the DOM is fully loaded
jQuery(document).ready(function() {

  var mobile = $('html').is('.mobile');

  if (mobile) {
    $('#app-desktop').remove();
    require(['appMobile'], function(App) {
      window.app = new App();
    });
  }
  else {
    require(['appDesktop'], function(App) {
      window.app = new App();
    });
  }


}); // jQuery
