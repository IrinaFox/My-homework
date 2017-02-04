/* Created by Liss on 02.02.2017.  */

window.onload = function () {
    var students = createStudentList();

    createListForm();
    AnimationStudentList();
//Function displays list of students on the screen
    function addStudentToForm () {
         var placeName = document.getElementById('names'),
             placeGender = document.getElementById('gender'),
             placeSkype = document.getElementById('skype'),
             students = createStudentList();

         viewStudentList(students, placeName, placeGender, placeSkype);
    }

    addStudentToForm();
    addEventToButton(students[0], students[1], students[2], students[3], students[4], students[5]);




};

