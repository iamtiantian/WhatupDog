describe("PupModel", function (){

  beforeEach(function (){
    this.pupModel = new PupModel();
    this.pupStub = sinon.stub(this.pupModel, 'save');

  });

  it("should be an instance of a PupModel", function (){
    expect(this.pupModel).is.instanceof(PupModel);

  });

  it("should have correct urlRoot", function (){
    expect(this.pupModel.urlRoot).to.be.ok;  expect(this.pupModel.urlRoot).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/yorkiepoo2");

  });

  it("should have a default name", function (){
    expect(this.pupModel.attributes.name).to.equal("Pookie");

  });

  it("should save my pup when I call save", function (){
    this.pupModel.set({name: "Bobo"});
    this.pupModel.save();

    // expect(this.pupStub).to.have.been.calledOnce;
    // this.pupModel.save();
    // expect.(this.pupStub).to.have.been.calledTwice;

  });


})
