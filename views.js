var PupView = Backbone.View.extend ({
  template: _.template($('#pupTmpl').html()),
  tagName: 'artcile',
  initialize: function () {
    console.log("A pup view!")

  },

  events: {


  },

  render: function () {

    var markup = this.template(this.model.toJson());
    this.$el.html(markup);

    return this;

  },

});


///COLLECTION VIEW

var Appview = Backbone.View.extend ({
  el:$('section'),
  initialize: function () {
    console.log('app view initialized!');
    //this.addAllPosts();




  },
  events: {
    "click .signup": "showCreate",


  },


/// SIGNUP///
createPup: function () {
  event.preventDefault();

///PUT IN PUP'S INFO///
  var newPup = {
    name: $('#createPup').find('input[name="newName"]').val(),
    photo: $('#createPup').find('input[name="newPhoto"]').val(),
    breed: $('#createPup').find('textarea[name="newBreed"]').val(),
    disposition: $('#createPup').find('input[name="newDisposition"]').val(),
  };

  var newModelPup = new PupModel(newPup);
  newModelPup.save();
  this.collection.add(newModelPup);
  this.addAllPups();
  this.$el.find('#createPup').find('input, textarea').val('');
  this.showCreate();


},


/// ENABLES YOU TO TOGGLE CREATE PUP FORM TO SHOW OR HIDE////
showCreate: function () {

  console.log("");
  this.$el.find('#createPup').toggleClass('show');
  $(."login").toggleClass('hide');
  createPup();

},

addOnePup: function (pup) {
  var pupView = new PupView ({model: pup});
  this.$el.append(postView.render().el);

},

addAllPups: function () {

  _.each(this.collection.models, this.addOnePup, this);
}
,



}


})
