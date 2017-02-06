//Displays the student list on the screen
function studentListView () {
    var students = createStudentList(),
        header = {};

    header.fullname = 'FULL NAME';
    header.email = 'E-MAIL';
    header.gender = 'GENDER';

    itemView(header);

    students.forEach(function (item) {
        var shortForm = item.getShortForm(),
            fullForm = item.getFullForm();

        studentView(shortForm, fullForm);
    });
}



