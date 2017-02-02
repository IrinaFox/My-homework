/**
 * Created by Liss on 02.02.2017.
 */
QUnit.module('test-for-liststudents test');


QUnit.test('Test 1', function (assert) {
    var expected, actual;

    var c = createStudentsList();
    actual = typeof c;
    expected= "object";

    assert.equal(actual, expected);
});

/*

QUnit.test('Test 2', function (assert) {
    var csv, expected, actual;

    csv = 'Name,Age,Car,Wife\nVasya,25,,true\nKolya,31,mersedes,false\n,Bobic,18,bentli,true\nIra,22,lexus,true';

    actual = CSVtoArray(csv).length;
    expected = 4;

    assert.equal(expected, actual);
});

QUnit.test('Test 3', function (assert) {
    var csv, expected,  actualObject,  actual;

    csv = 'Name,Age,Car,Wife\nVasya,25,,true\nKolya,31,mersedes,false\n,Bobic,18,bentli,true\nIra,22,lexus,true';

    actualObject = CSVtoArray(csv)[0];
    actual = Object.keys(actualObject).join("");
    expected = "NameAgeCarWife";

    assert.equal(expected, actual);
});

QUnit.test('Test 4', function (assert) {
    var csv, expected,  actualObject,  actual;

    csv = 'Name,Age,Car,Wife,Cat,Country,Work,Children,Conscience\nVasya,25,,true\nKolya,31,mersedes,false\n,Bobic,18,bentli,true\nIra,22,lexus,true';

    actualObject = CSVtoArray(csv)[0];
    actual = Object.keys(actualObject).join("");
    expected = "NameAgeCarWifeCatCountryWorkChildrenConscience";

    assert.equal(expected, actual);
});

QUnit.test('Test 5', function (assert) {
    var csv, expected,  actualObject,  actual, key, keysValues = [];

    csv = 'Name,Age,Car,Wife,Cat,Country,Work,Children,Conscience\nVasya,25,,true\nKolya,31,mersedes,false\n,Bobic,18,bentli,true\nIra,22,lexus,true';

    actualObject = CSVtoArray(csv)[1];
    var index=0;
    for(key in actualObject){
        if(actualObject[key]){
            keysValues[index] = actualObject[key];
            index++
        }
    }

    actual = keysValues.join(',');
    expected = 'Kolya,31,mersedes,false';

    assert.equal(actual, expected);
});

*/