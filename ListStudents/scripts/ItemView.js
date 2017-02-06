//Displays one student in one line with working button
function studentView (keyOfStudentShort, keyOfStudentFull) {
    var lineStudent = document.createElement('div'),
        content = document.getElementById('content'),
        ownButton = document.createElement('input'),
        key;

    for (key in keyOfStudentShort){
        var cellStudent = document.createElement('div');

        cellStudent.innerHTML = keyOfStudentShort[key];
        cellStudent.setAttribute('class', 'miniDiv');

        lineStudent.appendChild(cellStudent);
    }
    ownButton.value = 'More info';
    ownButton.type = 'button';

    ownButton.addEventListener('click', function () {
        var infoWindowList = document.getElementById('infoWindowList');

        if(infoWindowList) {
            infoWindowList.parentNode.removeChild(infoWindowList);
            displayMoreInfo(keyOfStudentFull);
        } else {
            displayMoreInfo(keyOfStudentFull);
        }
     }, false);

    lineStudent.setAttribute('class', 'line');

    lineStudent.appendChild(ownButton);
    content.appendChild(lineStudent);
    AnimationLineStudent(lineStudent);
}

//For one header line
function itemView (keyOfHeader) {
    var lineHeader = document.createElement('div'),
        content = document.getElementById('content'),
        infoHeader = document.createElement('div'),
        key;

    lineHeader.setAttribute('id', 'menu');

    for (key in keyOfHeader){
        var cellHeader = document.createElement('div');

        cellHeader.setAttribute('class', 'miniDiv');
        cellHeader.innerHTML = keyOfHeader[key];

        lineHeader.appendChild(cellHeader);
    }

    infoHeader.setAttribute('class', 'button');
    infoHeader.innerHTML = 'MORE';

    lineHeader.appendChild(infoHeader);
    content.appendChild(lineHeader);
}

//Make line of student bright when mouse is over
function AnimationLineStudent (lineStudent) {
    lineStudent.addEventListener('mouseover', function () {
        lineStudent.removeAttribute('class');
        lineStudent.setAttribute('class','lineBright');
    }, false);

    lineStudent.addEventListener('mouseout', function () {
        lineStudent.removeAttribute('class');
        lineStudent.setAttribute('class','line');
    }, false);
}

//Adding pictures
function addPictureToHeader () {
    var headers = document.getElementById('menu').children,
        namePic = document.createElement('img'),
        skypePic = document.createElement('img'),
        genderPic = document.createElement('img');

    console.log(headers[1]);

    namePic.src='pics/name.png';
    skypePic.src='pics/skype.png';
    genderPic.src='pics/gender.png';

    namePic.setAttribute('class', 'pic');
    skypePic.setAttribute('class', 'pic');
    genderPic.setAttribute('class', 'pic');

    headers[0].appendChild(namePic);
    headers[1].appendChild(skypePic);
    headers[2].appendChild(genderPic);
}

