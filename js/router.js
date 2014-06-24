// Filename: router.js

var tv;
define([
  'jquery',
  'underscore',
  'backbone',
], function ($, _, Backbone) {
  var AppRouter = Backbone.Router.extend({
    routes: {
     
      "": "defaultAction",
      "contact"  : "contact",
      "getcinema/:id": "getcinema"
    },
    changePage: function(view){
      
      view.render();
      this.activeView = view;
    },
    contact:function(){
      var that = this;
     require(['contactjs'],function(contactview)
     {
      if(that.activeView){
        that.activeView.$el.removeData().unbind();
        
      }
      var contactvw=new contactview({el:".container"});
      that.changePage(contactvw);
      //contactvw.render();

     } );
    },
    clearview:function(){
           if(this.activeView){
        this.activeView.$el.removeData().unbind();
        
      }
    },

    getcinema:function(id){
      var that=this;
      var selectmenu=document.getElementById(id);
      var cinename=selectmenu.innerText;
      
 require(['mdv', 'collections/theaterCollection','collections/movielistcollection'], function (moviedetailview, theaterCollection,movielistcollection) {
   
        that.clearview();
        var tc1 = new theaterCollection(); 
        tc1.fetch({success: function(data){

      
          var mvl=new movielistcollection();
          
          mvl.fetch({success:function(data1){ 
          var mv = new moviedetailview({el: ".container", collection: data,collection1:data1,cinename1:cinename});
          
          that.changePage(mv);
          //mv.render();
          $( "#home" ).click(function() {
            mv.removeview();
            
          })

        }
        });
          
        }});});
    }
  });

  


  var initialize = function(options){
    var router = new AppRouter(options);
    router.on('route:defaultAction', function (actions) {
      require(['tview', 'collections/theaterCollection'], function (theatersView, theaterCollection) {
        var tc = new theaterCollection();
        tc.fetch({success: function(data){

          tv = new theatersView({el: ".container", collection: data});
          router.changePage(tv);
          //tv.render();
         
       

        } });
      });

      
      


    });
   
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
