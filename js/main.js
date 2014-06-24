// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // Major libraries
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
    lodash: 'libs/lodash/lodash', // alternative to underscore
    backbone: 'libs/backbone/backbone-min', // https://github.com/amdjs
    sinon: 'libs/sinon/sinon.js',
    bootstrap: 'libs/bootstrap/bootstrap',
    // Require.js plugins
    text: 'libs/require/text',
    events: 'event',


    templates: '../templates',
    models: 'models',
    collections: 'collections',
    tview:'views/theatersView',
    mdv:'views/theaterdetailview',
    contactjs:'views/contact',
    movielistmodel:'models/movielistmodel'

  }

});


require([
  'router'
], function(Router){
  Router.initialize({});  // The router now has a copy of all main appview
});
