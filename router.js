var AppRouter = Backbone.Router.extend ({
  initialize: function (){
    console.log("routes have started!");

  },

  routes: {
    "dogs"    : "home",
    "home": "home",
    "test": "testRouter",
    "" : "home", //// This will be the opening page
    "dogs": "dogPound"
  },

  home: function () {
    console.log("home works!")
    var pupCollection = new PupCollection();

   pupCollection.fetch().then(function () {
     var appView = new Appview({collection: pupCollection});
   });



    // var signInRoute = new Appview;
    //  signInRoute.render();


  },

  // testRouter: function () {
  //   var testRoute = this.loadView(new testView());
  //
  //   testRoute.render();
  //
  // },

  // signInRouter: function () {
  //   var signInRoute = new SignInView;
  //   signInRoute.render();
  //
  // },

  // dogDisplay: function () {
  //   var pupCollection = new PupCollection();
  //
  //  pupCollection.fetch().then(function () {
  //    var appView = new Appview({collection: pupCollection});
  //  });
  //
  //
  // }


});
