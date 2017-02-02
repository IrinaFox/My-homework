QUnit.module('Palindrome test');

QUnit.test('Test 1', function (assert) {    
    var input, expected, actual;
		
	input = 35753;
	expected = true;
		
	actual = isPalindrome(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 2', function (assert) {    
    var input, expected, actual;
		
	input = 357753;
	expected = true;
		
	actual = isPalindrome(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 3', function (assert) {    
    var input, expected, actual;
		
	input = 35750;
	expected = false;
		
	actual = isPalindrome(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 4', function (assert) {    
    var input, expected, actual;
		
	input = 357740;
	expected = false;
		
	actual = isPalindrome(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 5', function (assert) {    
    var input, expected, actual;
		
	input = 55;
	expected = true;
		
	actual = isPalindrome(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 6', function (assert) {    
    var input, expected, actual;
		
	input = 3;
	expected = true;
		
	actual = isPalindrome(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 7', function (assert) {    
    var input, expected, actual;
		
	input = '3553';
	expected = false;
		
	actual = isPalindrome(input);
	
	assert.equal(expected, actual);
});

QUnit.test('Test 1', function (assert) {    
    var input, expected, actual;
		
	input = 'Hello Kitty';
	expected = false;
		
	actual = isPalindrome(input);
	
	assert.equal(expected, actual);
});