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

    //Creating buttons
    var buttonIrina = document.createElement('input');
    buttonIrina.setAttribute('id','buttonIrina');
    buttonIrina.value = 'more';
    buttonIrina.type = 'button';
    infoContent.appendChild(buttonIrina);

    infoContent.innerHTML += "<br/><br/>";

    var buttonSvetlana = document.createElement('input');
    buttonSvetlana.setAttribute('id','buttonSvetlana');
    buttonSvetlana.value = 'more';
    buttonSvetlana.type = 'button';
    infoContent.appendChild(buttonSvetlana);

    infoContent.innerHTML += "<br/><br/>";

    var buttonPolina = document.createElement('input');
    buttonPolina.setAttribute('id','buttonPolina');
    buttonPolina.value = 'more';
    buttonPolina.type = 'button';
    infoContent.appendChild(buttonPolina);

    infoContent.innerHTML += "<br/><br/>";

    var buttonElena = document.createElement('input');
    buttonElena.setAttribute('id','buttonElena');
    buttonElena.value = 'more';
    buttonElena.type = 'button';
    infoContent.appendChild(buttonElena);

    infoContent.innerHTML += "<br/><br/>";

    var buttonAlexey = document.createElement('input');
    buttonAlexey.setAttribute('id','buttonAlexey');
    buttonAlexey.value = 'more';
    buttonAlexey.type = 'button';
    infoContent.appendChild(buttonAlexey);

    infoContent.innerHTML += "<br/><br/>";

    var buttonVladimir = document.createElement('input');
    buttonVladimir.setAttribute('id','buttonVladimir');
    buttonVladimir.value = 'more';
    buttonVladimir.type = 'button';
    infoContent.appendChild(buttonVladimir);

    infoContent.innerHTML += "<br/>";

}