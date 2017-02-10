//Create new window with more information. works only one time
function displayMoreInfo (keyOfStudent) {
    var information = '',
        infoWindowString,
        infoWindow,
        key;

    for (key in keyOfStudent) {
        information += '<div class="infoDiv">' + key + ': ' + keyOfStudent[key] + '</div>';
    }

    infoWindowString = infoWindowTpl.replace(':information', information);
    document.body.innerHTML += infoWindowString;

    infoWindow = document.getElementById('infoWindowList');

    animationShowList(infoWindow);
}

//Add animation to info-window - it makes the window brighter and bigger
function animationShowList (neededElement) {
    neededElement.addEventListener('mouseover', function () {
        neededElement.removeAttribute('class');
        neededElement.setAttribute('class','bright');
    }, false);

    neededElement.addEventListener('mouseout', function () {
        neededElement.removeAttribute('class');
        neededElement.setAttribute('class','infoWindow');
    }, false);

    neededElement.addEventListener('click', function () {
        neededElement.parentNode.removeChild(neededElement);
    }, false);
}
