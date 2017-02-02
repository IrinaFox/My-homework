QUnit.module('FiboCounter test');

QUnit.test('Test 1', function (assert) {    
    var left, right, expected, actual;
		
	left = 10;	
	right = 100;
    expected = 5;
	
	actual = fiboCounter(left, right);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 2', function (assert) {    
    var left, right, expected, actual;
		
	left = 13;	
	right = 89;
    expected = 5;
	
	actual = fiboCounter(left, right);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 3', function (assert) {    
    var left, right, expected, actual;
		
	left = 1;	
	right = 10;
    expected = 6;
	
	actual = fiboCounter(left, right);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 4', function (assert) {    
    var left, right, expected, actual;
		
	left = 100;	
	right = 10;
    expected = 0;
	
	actual = fiboCounter(left, right);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 5', function (assert) {    
    var left, right, expected, actual;
		
	left = 500;	
	right = 1000;
    expected = 2;
	
	actual = fiboCounter(left, right);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 6', function (assert) {    
    var left, right, expected, actual;
		
	left = 5000;	
	right = 10000;
    expected = 1;
	
	actual = fiboCounter(left, right);
	
	assert.equal(expected, actual);
});


QUnit.test('Test 7', function (assert) {    
    var left, right, expected, actual;
		
	left = -10;	
	right = 10;
    expected = 7;
	
	actual = fiboCounter(left, right);
	
	assert.equal(expected, actual);
});