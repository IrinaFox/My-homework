/**
 * Created by Liss on 03.02.2017.
 */

//Create form for containing student's list
function createListForm() {
    var content = document.getElementById('content');

    var names = document.createElement('header'),
        gender = document.createElement('header'),
        skype = document.createElement('header'),
        namesContent = document.createElement('div'),
        genderContent = document.createElement('div'),
        skypeContent = document.createElement('div');

    //Adding 'id' for having an access to elements
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