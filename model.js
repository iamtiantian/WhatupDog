var PupModel = Backbone.Model.extend ({
  urlRoot:'http://tiy-fee-rest.herokuapp.com/collections/yorkiepoo2',
  idAttribute: '_id',
  defaults: {
    name: "Pookie",
    photo: 'images/york1.jpg',
    breed: "Yorkipoo",
    disposition: "sweet",

  },
  initialize: function () {
    console.log("A pup is born!");
  }
});
