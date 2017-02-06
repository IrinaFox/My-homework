//Create new window with more information
function displayMoreInfo (keyOfStudent) {
    var infoWindow = document.createElement('div'),
        key;

    infoWindow.setAttribute('id', 'infoWindowList');
    infoWindow.setAttribute('class', 'infoWindow');

    for (key in keyOfStudent) {
        var infoElement = document.createElement('div');

        infoElement.innerHTML = key + ': ' + keyOfStudent[key];
        infoElement.setAttribute('class', 'infoDiv');

        infoWindow.appendChild(infoElement);
    }

    document.body.appendChild(infoWindow);

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