/**
 * Created by Liss on 03.02.2017.
 */

function showInformation (student) {
    var infoWindow = document.createElement('div');

    infoWindow.setAttribute('id', 'infoWindow');
    document.body.appendChild(infoWindow);

    var information = getInformation(student).join('');

    infoWindow.innerHTML += information;
}
