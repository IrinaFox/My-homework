/**
 * Created by Liss on 03.02.2017.
 */

//adding events for oncklick on needed buttons
function addEventToButton (irina, svetlana, polina, elena, alexey, vladimir){
    var buttonIrina = document.getElementById('buttonIrina'),
        buttonSvetlana = document.getElementById('buttonSvetlana'),
        buttonPolina = document.getElementById('buttonPolina'),
        buttonElena = document.getElementById('buttonElena'),
        buttonAlexey = document.getElementById('buttonAlexey'),
        buttonVladimir = document.getElementById('buttonVladimir'),
        noRepeat = 0; //if button will be clicked more than one time - it won't be work



        buttonIrina.addEventListener('click', function () {
            var infoWindowList = document.getElementById('infoWindowList');
            if (noRepeat === 0){
                showInformation(irina);
                noRepeat++;
            } else {
                noRepeat = 0;
                infoWindowList.parentNode.removeChild(infoWindowList);
                showInformation(irina);
                noRepeat++;
            }
            console.log(noRepeat);
        }, false);

        buttonSvetlana.addEventListener('click', function () {
            var infoWindowList = document.getElementById('infoWindowList');
            if (noRepeat === 0) {
                showInformation(svetlana);
                noRepeat++;
            } else {
                noRepeat = 0;
                infoWindowList.parentNode.removeChild(infoWindowList);
                showInformation(svetlana);
                noRepeat++;
            }
        }, false);

        buttonPolina.addEventListener('click', function () {
            var infoWindowList = document.getElementById('infoWindowList');
            if (noRepeat === 0) {
                showInformation(polina);
                noRepeat++;
            } else {
                noRepeat = 0;
                infoWindowList.parentNode.removeChild(infoWindowList);
                showInformation(polina);
                noRepeat++;
            }
        }, false);

        buttonElena.addEventListener('click', function () {
            var infoWindowList = document.getElementById('infoWindowList');
            if (noRepeat === 0) {
                showInformation(elena);
            } else {
                noRepeat = 0;
                infoWindowList.parentNode.removeChild(infoWindowList);
                showInformation(elena);
                noRepeat++;
            }
            noRepeat++;
        }, false);

        buttonAlexey.addEventListener('click', function () {
            var infoWindowList = document.getElementById('infoWindowList');
            if (noRepeat === 0) {
                showInformation(alexey);
                noRepeat++;
            } else {
                noRepeat = 0;
                infoWindowList.parentNode.removeChild(infoWindowList);
                showInformation(alexey);
                noRepeat++;
            }
        }, false);

        buttonVladimir.addEventListener('click', function () {
            var infoWindowList = document.getElementById('infoWindowList');
            if (noRepeat === 0) {
                showInformation(vladimir);
                noRepeat++;
            } else {
                noRepeat = 0;
                infoWindowList.parentNode.removeChild(infoWindowList);
                showInformation(vladimir);
                noRepeat++;
            }
        }, false);


}