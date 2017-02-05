/**
 * Created by Liss on 04.02.2017.
 */

//Make the window brigth - when mouse on iton every main element: names, gender and skype
function AnimationStudentList () {
    var mainWindow = document.getElementsByClassName('mainNames'),
        i;

    mainWindow[0].addEventListener('mouseover', function () {
        mainWindow[0].style.backgroundColor = 'azure';
     }, false);
    mainWindow[0].addEventListener('mouseout', function () {
        mainWindow[0].style.backgroundColor = '#BEFFE5';
    }, false);

    mainWindow[1].addEventListener('mouseover', function () {
        mainWindow[1].style.backgroundColor = 'azure';
    }, false);
    mainWindow[1].addEventListener('mouseout', function () {
        mainWindow[1].style.backgroundColor = '#BEFFE5';
    }, false);

    mainWindow[2].addEventListener('mouseover', function () {
        mainWindow[2].style.backgroundColor = 'azure';
    }, false);
    mainWindow[2].addEventListener('mouseout', function () {
        mainWindow[2].style.backgroundColor = '#BEFFE5';
    }, false);
}