//Returns array of objects, where every object - is a person
function CSVtoArray (csv) {
    var elementsSCV = csv.split(/\r?\n/),
        keys = elementsSCV[0].split(","),
        objectsCsvElements = [],
        index = 0,
        i,
        j;

    for (i = 1; i < elementsSCV.length; i++) {
        var objectOfArray = {};

        for (j = 0; j < keys.length; j++) {
            var keyValue = (elementsSCV[i].split(","))[j],
                key = keys[j];

            objectOfArray[key] = keyValue;
        }

        objectsCsvElements[index] = objectOfArray;
        index++
    }

    return objectsCsvElements;
}