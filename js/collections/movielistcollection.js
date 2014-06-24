define([
  'jquery',
  'lodash',
  'backbone',
  'models/movielistmodel'
], function($, _, Backbone, movielistmodel){
  var movielistcollection = Backbone.Collection.extend({
    model: movielistmodel,
    url: function(){
      return "../mockups/movielist.json"
    },
    initialize: function(){

    }

  });

  return movielistcollection;
});
