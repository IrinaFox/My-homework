/**
 * Created by Liss on 05.02.2017.
 */

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