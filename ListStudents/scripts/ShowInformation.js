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

