/**
 * Created by Liss on 03.02.2017.
 */

/*Show more information about every student, when is clicking on the button "more"
and add few animations*/
function showInformation (student) {
    var infoWindow = document.createElement('div'),
        information = getInformation(student).join('');

    infoWindow.setAttribute('id', 'infoWindowList');
    infoWindow.setAttribute('class', 'infoWindow');

    document.body.appendChild(infoWindow);

    infoWindow.innerHTML += information;

    animationShowList();
}

//Add animation to info-window - it makes the window brighter and bigger
function animationShowList () {
    var infoWindow = document.getElementById('infoWindowList');

    infoWindow.addEventListener('mouseover', function () {
        infoWindow.removeAttribute('class');
        infoWindow.setAttribute('class','bright');
    }, false);

    infoWindow.addEventListener('mouseout', function () {
        infoWindow.removeAttribute('class');
        infoWindow.setAttribute('class','infoWindow');
    }, false);

    infoWindow.addEventListener('click', function () {
        infoWindow.parentNode.removeChild(infoWindow);
    });
}