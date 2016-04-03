describe('Hello World test', function() {
	var greeter;

	beforeEach(function () {
		greeter = 'Test Greeter';
	});


	it('should have the string Test Greeter', function() {
		expect(greeter).toEqual('Test Greeter');
	});
});
