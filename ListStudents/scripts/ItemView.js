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



