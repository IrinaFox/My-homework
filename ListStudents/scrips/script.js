/**
 * Created by Liss on 02.02.2017.
 */
    //function for creating list of students

    function createStudentsList () {
        var irina = new Student("Irina", "female", "princess_rina88");
        var svetlana = new Student("Svetlana", "female", "ami-caty");
        var polina = new Student("Polina", "female", "polina_volna");
        var elena = new Student("Elena", "female", "izaya256");
        var alexey = new Student("Alexey", "male", "dn100980rev");
        var vladimir = new Student("Vladivir", "male", "vovanium");

        return [irina, svetlana, polina, elena, alexey, vladimir];
    }

    createListStudents();

    var students = createStudentsList();

    var placeName = document.getElementById('names');
    placeName.innerHTML += "!!!!";
    console.log(placeName);
    var placeGender = document.getElementById('gender');
      var placeSkype = document.getElementById('skype');



    var creatingList = new StudentsList(students, placeName, placeGender, placeSkype);
    creatingList.showList();



   function createListStudents() {
    var content = document.getElementById('content');

    var names = document.createElement('header'),
        gender = document.createElement('header'),
        skype = document.createElement('header');


    var namesContent = document.createElement('div'),
        genderContent = document.createElement('div'),
        skypeContent = document.createElement('div');


       genderContent.setAttribute('id', 'gender');
       namesContent.setAttribute('id', 'names');
       skypeContent.setAttribute('id', 'skype');

       names.innerHTML += "NAME";
       gender.innerHTML += "GENDER";
       skype.innerHTML += "SKYPE";

    content.appendChild(names);
    content.appendChild(gender);
    content.appendChild(skype);

    content.appendChild(namesContent);
    content.appendChild(genderContent);
    content.appendChild(skypeContent);
}



