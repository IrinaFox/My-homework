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
        buttonVladimir = document.getElementById('buttonVladimir');

    buttonIrina.addEventListener('click', function(){
        showInformation(irina);
    }, false);

    buttonSvetlana.addEventListener('click', function(){
        showInformation(svetlana);
    }, false);

    buttonPolina.addEventListener('click', function(){
        showInformation(polina);

    }, false);

    buttonElena.addEventListener('click', function(){
        showInformation(elena);
     }, false);

    buttonAlexey.addEventListener('click', function(){
        showInformation(alexey);
     }, false);

    buttonVladimir.addEventListener('click', function(){
        showInformation(vladimir);
    }, false);
}