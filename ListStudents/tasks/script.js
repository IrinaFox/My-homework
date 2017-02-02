/**
 * Created by Liss on 02.02.2017.
 */
    //function for creating list of students
//window.onload = function () {
    function createStudentsList () {
        var irina = new Student("Irina", "female", "princess_rina88");
        var svetlana = new Student("Svetlana", "female", "ami-caty");
        var polina = new Student("Polina", "female", "polina_volna");
        var elena = new Student("Elena", "female", "izaya256");
        var alexey = new Student("Alexey", "male", "dn100980rev");
        var vladimir = new Student("Vladivir", "male", "vovanium");

        return [irina, svetlana, polina, elena, alexey, vladimir];
    }
var students = createStudentsList();
console.log(typeof students);



  /*  function createListStudents() {
    var content = document.getElementById('content');

    var names = document.createElement('header'),
        gender = document.createElement('header'),
        skype = document.createElement('header');


    var namesContent = document.createElement('div'),
        genderContent = document.createElement('div'),
        skypeContent = document.createElement('div');

    namesContent.innerHTML = "Irina <br/><br/> Swetlana <br/><br/> Polina <br/><br/>" +
    " Elena <br/><br/> Alexey <br/><br/> Vladimir ";
    genderContent.innerHTML = "female <br/><br/> female <br/><br/> female <br/><br/>" +
    "female <br/><br/> male <br/><br/> male <br/><br/> ";
    skypeContent.innerHTML = "princess_rina88 <br/><br/> ami-caty <br/><br/>" +
    "polina_volna <br/><br/> izaya256 <br/><br/> dn100980rev <br/><br/> vovanium ";

    gender.innerHTML = 'GENDER';
    names.innerHTML = 'NAME';
    skype.innerHTML = 'SKYPE';

    gender.setAttribute('id', 'gender');
    names.setAttribute('id', 'names');
    skype.setAttribute('id', 'skype');

    content.appendChild(names);
    content.appendChild(gender);
    content.appendChild(skype);

    content.appendChild(namesContent);
    content.appendChild(genderContent);
    content.appendChild(skypeContent);
}

createListStudents();

}; */