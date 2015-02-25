
//testing our pup collection
describe("Pup Collection", function (){
  beforeEach(function (){
    this.pupCollection = new PupCollection ();
  //  this.pupCollectionStub = sinon.stub(this.pupCollection, 'save');


  });

  it("should be an instance of a Pup Collection", function (){
    expect(this.pupCollection).is.instanceof(PupCollection);

  });

  it("should have correct urlRoot", function (){
    expect(this.pupCollection.url).to.be.ok;  expect(this.pupCollection.url).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/yorkiepoo2");

  });
});
