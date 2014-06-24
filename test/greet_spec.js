//var expect = require("chai").expect;

describe('greet', function(){

	greet = require("../");

	it("should greet a person by name", function(){
		expect(greet("siyu")).to.eql("hello, siyu");
	});

	it("should greet a person flirtatiously if drunk", function(){
		expect(greet("siyu", "drunk")).to.eql("hello siyu, you look sexy today");
	});
});