/**
 * Created by Liss on 05.02.2017.
 */

//View buttons on the screen
function viewButtons () {
    var infoContent = document.getElementById('info'),
        buttonIrina = document.createElement('input'),
        buttonSvetlana = document.createElement('input'),
        buttonPolina = document.createElement('input'),
        buttonElena = document.createElement('input'),
        buttonAlexey = document.createElement('input'),
        buttonVladimir = document.createElement('input');

    createButton(buttonIrina,'buttonIrina');
    createButton(buttonSvetlana,'buttonSvetlana');
    createButton(buttonPolina,'buttonPolina');
    createButton(buttonElena,'buttonElena');
    createButton(buttonAlexey,'buttonAlexey');
    createButton(buttonVladimir, 'buttonVladimir');
}

//Create buttons
function createButton(name,idName) {
    var infoContent = document.getElementById('info');
    name.setAttribute('id',idName);
    name.value = 'more';
    name.type = 'button';
    infoContent.appendChild(name);
    infoContent.innerHTML += "<br/><br/>";
}