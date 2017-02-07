//Displays one student in one line with working button
function studentView (keyOfStudentShort, keyOfStudentFull) {
    var content = document.getElementById('content'),
        lineStudent = document.createElement('div'),
        ownButton = document.createElement('input'),
        key;

    for (key in keyOfStudentShort){
        var cellStudent = '<div class="miniDiv">'+ keyOfStudentShort[key] + '</div>';

        lineStudent.innerHTML += cellStudent;
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
    var genderPic = '<img src="pics/gender.png" class="pic"> </img>',
        skypePic = '<img src="pics/skype.png" class="pic"> </img>',
        namePic = '<img src="pics/name.png" class="pic"> </img>',
        headers = document.getElementById('menu').children;

    headers[0].innerHTML += namePic;
    headers[1].innerHTML += skypePic;
    headers[2].innerHTML += genderPic;
}

