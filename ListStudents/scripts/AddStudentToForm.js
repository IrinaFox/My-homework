/**
 * Created by Liss on 04.02.2017.
 */

//Function displays list of students on the screen
function addStudentToForm () {
    var placeGender = document.getElementById('gender'),
        placeSkype = document.getElementById('skype'),
        placeName = document.getElementById('names'),
        students = createStudentList();

    viewStudentList(students, placeName, placeGender, placeSkype);
}