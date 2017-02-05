/* Created by Liss on 02.02.2017.  */

window.onload = function () {
    var students = createStudentList();

    createListForm();
    viewButtons();
    AnimationStudentList();
    addStudentToForm();
    addEventToButton(students[0], students[1], students[2], students[3], students[4], students[5]);
};

