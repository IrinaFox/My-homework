/**
 * Created by Liss on 02.02.2017.
 */


window.onload = function() {
    //function for creating list of students
    function createListStudents () {
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
}
