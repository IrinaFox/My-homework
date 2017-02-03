/* Created by Liss on 02.02.2017.  */

window.onload = function () {

    createListForm();

//Function displays list of students on the screen
     function addStudentToForm () {
         var placeName = document.getElementById('names'),
             placeGender = document.getElementById('gender'),
             placeSkype = document.getElementById('skype'),
             students = createStudentList();

         viewStudentList(students, placeName, placeGender, placeSkype);
     }
     addStudentToForm();


};

