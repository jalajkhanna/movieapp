define([
  'jquery',
  'lodash',
  'backbone',
  'models/theaterModel'
], function($, _, Backbone, theaterModel){
  var theatersCollection = Backbone.Collection.extend({
    model: theaterModel,
    url: function(){
      return "../mockups/theaterData.json"
    },
    initialize: function(){

    }

  });

  return theatersCollection;
});
