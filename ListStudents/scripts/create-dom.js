/**
 * Created by Liss on 03.02.2017.
 */

//Create form for containing student's list
function createListForm() {
    var content = document.getElementById('content');

    var names = document.createElement('header'),
        gender = document.createElement('header'),
        skype = document.createElement('header'),
        info = document.createElement('header'),
        namesContent = document.createElement('div'),
        genderContent = document.createElement('div'),
        skypeContent = document.createElement('div'),
        infoContent = document.createElement('div'),
        skypePic = document.createElement('img'),
        namePic = document.createElement('img'),
        genderPic = document.createElement('img');

    //Adding 'id' for having an access to elements
    genderContent.setAttribute('id', 'gender');
    namesContent.setAttribute('id', 'names');
    skypeContent.setAttribute('id', 'skype');

    genderContent.setAttribute('class', 'mainNames');
    namesContent.setAttribute('class', 'mainNames');
    skypeContent.setAttribute('class', 'mainNames');

    infoContent.setAttribute('id', 'info');
    info.setAttribute('id', 'infoHeader');

    names.innerHTML += 'NAME';
    gender.innerHTML += 'GENDER';
    skype.innerHTML += 'SKYPE';

    //Adding pic of skype
    skypePic.src = 'pics/skype.png';
    skypePic.setAttribute('id', 'skypePic');
    skype.appendChild(skypePic);

    //Adding pic of name
    namePic.src = 'pics/name.png';
    namePic.setAttribute('id', 'namePic');
    names.appendChild(namePic);

    //Adding pic of gender
    genderPic.src = 'pics/gender.png';
    genderPic.setAttribute('id', 'genderPic');
    gender.appendChild(genderPic);

    content.appendChild(names);
    content.appendChild(gender);
    content.appendChild(skype);
    content.appendChild(info);
    content.appendChild(namesContent);
    content.appendChild(genderContent);
    content.appendChild(skypeContent);
    content.appendChild(infoContent);
}


