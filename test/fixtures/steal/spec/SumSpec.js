steal('/test/fixtures/steal/src/math.js', function() {

	describe('Example Steal test', function(){
		it('Should add two numbers together', function(){
			expect(sum(2,10)).toEqual(12);
		});
	})

});

