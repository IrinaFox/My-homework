/**
 * Created by Liss on 02.02.2017.
 */

createListForm();

//function for creating array with list of students
function createStudentsList () {
    var irina = new Student("Irina", "female", "princess_rina88");
    var svetlana = new Student("Svetlana", "female", "ami-caty");
    var polina = new Student("Polina", "female", "polina_volna");
    var elena = new Student("Elena", "female", "izaya256");
    var alexey = new Student("Alexey", "male", "dn100980rev");
    var vladimir = new Student("Vladivir", "male", "vovanium");

    return [irina, svetlana, polina, elena, alexey, vladimir];
}

//Function displays list of students on the screen
function addStudentsToForm () {
    var placeName = document.getElementById('names'),
        placeGender = document.getElementById('gender'),
        placeSkype = document.getElementById('skype'),
        students = createStudentsList(),
        creatingList = new StudentsList(students, placeName, placeGender, placeSkype);

    creatingList.showList();
}
addStudentsToForm();


