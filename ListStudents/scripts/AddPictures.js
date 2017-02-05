/**
 * Created by Liss on 05.02.2017.
 */

//Adding pictures to headers
function addPictures () {
    var skypePic = document.createElement('img'),
        namePic = document.createElement('img'),
        genderPic = document.createElement('img'),
        skype = document.getElementById('skypeHeader'),
        gender = document.getElementById('genderHeader'),
        names = document.getElementById('namesHeader');

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
}

