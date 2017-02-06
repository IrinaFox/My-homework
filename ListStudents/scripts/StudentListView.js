//Displays the student list on the screen
function studentListView () {
    var studentList = new StudentList(),
        header = {};

    header.fullname = 'FULL NAME';
    header.email = 'SKYPE';
    header.gender = 'GENDER';

    itemView(header);

    studentList.students.forEach(function (item) {
        var shortForm = item.getShortForm(),
            fullForm = item.getFullForm();

        studentView(shortForm, fullForm);
    });
    addPictureToHeader();
}

