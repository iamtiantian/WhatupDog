$(function () {

  var pupCollection = new PupCollection();

 pupCollection.fetch().then(function () {
   var appView = new Appview({collection: pupCollection});
 });






});
