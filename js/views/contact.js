define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/contactview.html'
  
],function($, _, Backbone, template){



var contactview= Backbone.View.extend
({

	initialize: function(){
		contactviewtemplate: _.template(template);
		
	},
	render: function(){
		  $(this.el).html( template );
	}
});
return contactview;
});