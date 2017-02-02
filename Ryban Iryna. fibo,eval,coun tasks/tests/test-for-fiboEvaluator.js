QUnit.module('FiboEvaluator test');

QUnit.test('Test 1', function (assert) {    
    var input, expected, actual;
		
	input = 2;	
    expected = 5;
	
	actual = fiboEvaluator(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 2', function (assert) {    
    var input, expected, actual;
		
	input = 3;	
    expected = 5;
	
	actual = fiboEvaluator(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 3', function (assert) {    
    var input, expected, actual;
		
	input = 2;	
    expected = 5;
	
	actual = fiboEvaluator(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 4', function (assert) {    
    var input, expected, actual;
		
	input = 4;	
    expected = 4;
	
	actual = fiboEvaluator(input);
	
	assert.equal(expected, actual);
});