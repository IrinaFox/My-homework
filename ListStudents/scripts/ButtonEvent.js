/**
 * Created by Liss on 03.02.2017.
 */

//adding events for click on needed buttons
function addEventToButton (irina, svetlana, polina, elena, alexey, vladimir) {
    var buttonIrina = document.getElementById('buttonIrina'),
        buttonSvetlana = document.getElementById('buttonSvetlana'),
        buttonPolina = document.getElementById('buttonPolina'),
        buttonElena = document.getElementById('buttonElena'),
        buttonAlexey = document.getElementById('buttonAlexey'),
        buttonVladimir = document.getElementById('buttonVladimir'),
        noRepeat = 0, //if button will be clicked more than one time - it won't be work
        allButtonStudent = [buttonIrina, buttonSvetlana, buttonPolina, buttonElena, buttonAlexey, buttonVladimir],
        arrayWithStudentNames = arguments;

    allButtonStudent.forEach(function(item, i){
        item.addEventListener('click', function () {
            var infoWindowList = document.getElementById('infoWindowList');

            if (noRepeat === 0 || !infoWindowList) {
                showInformation(arrayWithStudentNames[i]);
                noRepeat++;
            } else {
                noRepeat = 0;
                infoWindowList.parentNode.removeChild(infoWindowList);
                showInformation(arrayWithStudentNames[i]);
                noRepeat++;
            }
        }, false);
    });
}


