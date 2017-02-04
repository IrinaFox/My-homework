/**
 * Created by Liss on 03.02.2017.
 */

function showInformation (student) {
    var infoWindow = document.createElement('div'),
        information = getInformation(student).join('');

    infoWindow.setAttribute('class', 'infoWindow');
    infoWindow.addEventListener('mouseover', function () {
        infoWindow.removeAttribute('class');
        infoWindow.setAttribute('class','bright');
    }, false);

    infoWindow.addEventListener('mouseout', function () {
        infoWindow.removeAttribute('class');
        infoWindow.setAttribute('class','infoWindow');

    }, false);

    document.body.appendChild(infoWindow);

    infoWindow.innerHTML += information;
}
