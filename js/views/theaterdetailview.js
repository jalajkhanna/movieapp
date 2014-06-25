
define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/moviedetailview.html',
  'tview',
  'bootstrap'
], function($, _, Backbone, template,abc){
  var ev1,selectedmovie,selecttime;
  var moviedetailview = Backbone.View.extend({
    moviedetailtemplate: _.template(template),
  
     events:{
      "click #addrow": "newrow",
      "click .edit-button": "onClick",
      "click .edit": "editClick"
     
    },

    editClick:function(ev){
       selectedmovie=$(ev.target).parent().parent().find('.movie')[0].innerText;
       selecttime=$(ev.target).parent().parent().find('.time')[0].innerText;
       mname.value=selectedmovie;
       mtime.value=selecttime;
       ev1=ev;
    },
    removeview:function()
  {
   
    this.off();
  },

    newrow: function(){
      var movie,time;
      movie=newmname.value;
      time=newmtime.value;
      $('.table').append('<tr><td>'+movie+'</td><td>'+time+'</td><td><button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal1">edit</button></td></tr>');

    },


   onClick: function () {
        $(ev1.target).parent().parent().find('.movie')[0].innerText=mname.value;
        $(ev1.target).parent().parent().find('.time')[0].innerText=mtime.value;

     },

    initialize: function(){
      this.collection = this.options.collection;
      this.collection1 = this.options.collection1;
      this.cinename1=this.options.cinename1;
      

    },

  
    render: function(){

      $(this.el).html(this.moviedetailtemplate({collection: this.collection, collection1 : this.collection1,cinename1:this.cinename1}));
    
    }
  });
  return moviedetailview;
});
