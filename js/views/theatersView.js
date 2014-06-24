define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/theatersView.html',
  'bootstrap'
], function($, _, Backbone, template){

  var theatersView = Backbone.View.extend({
    theatersTemplate: _.template(template),
    events:{
      "click #addcinema": "addnewrow",
      "click .cinemalist": "cinemalistOnChange"
    },
    addnewrow:function(){   
      var tab=document.getElementById('cinelists');
      var lastRowIndex = tab.rows.length+1;
      var appstr="<tr><td id=" +lastRowIndex + " class='cinemalist'>"+cname.value+"</td></tr>";
      $('.table').append(appstr);

    },
    cinemalistOnChange: function(e){

    var selectmenu=document.getElementById(e.currentTarget.id);
    
    if(selectmenu.id!=null)
    { 
    var id=selectmenu.id;
    var url =  window.location.pathname+"#getcinema/"+id;  
    
    Backbone.history.navigate(url, {trigger: true});
     }
    },
    initialize: function(){
      this.collection = this.options.collection;
    },
    render: function(){
      
      $(this.el).html(this.theatersTemplate({collection: this.collection}));
    }
  });
  return theatersView;
});
