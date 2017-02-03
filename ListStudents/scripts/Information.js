/**
 * Created by Liss on 03.02.2017.
 */

//Adding more information
function getInformation (student) {
    var studentInformation = [],
        index = 0,
        key;

    for (key in student) {
        var keyValue = student[key];
        studentInformation[index] = key + ": " + keyValue + "<br/>";
        index++;
    }

    return studentInformation;
}