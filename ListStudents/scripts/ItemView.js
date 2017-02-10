function createStudent (fullName, skype, gender, buttonName) {
    var content = document.getElementById('content'),
        studentLine = listTpl.replace(':fullName', fullName)
            .replace(':skype', skype)
            .replace(':gender', gender)
            .replace(':buttonName', buttonName);
    content.innerHTML += studentLine;
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

  //Make line of student bright when mouse is over
  function AnimationLineStudent (item) {
      item.addEventListener('mouseover', function () {
          item.removeAttribute('class');
          item.setAttribute('class','lineBright');
      }, false);

      item.addEventListener('mouseout', function () {
          item.removeAttribute('class');
          item.setAttribute('class','line');
      }, false);
  }