/**
 * Created by Liss on 04.02.2017.
 */

//Make the window brigth - when mouse on iton every main element: names, gender and skype
function AnimationStudentList() {
    var names = document.getElementsByClassName('mainNames'),
        i;

    names[0].addEventListener('mouseover', function () {
          names[0].style.backgroundColor = 'azure';
     }, false);
    names[0].addEventListener('mouseout', function () {
        names[0].style.backgroundColor = '#BEFFE5';
    }, false);

    names[1].addEventListener('mouseover', function () {
        names[1].style.backgroundColor = 'azure';
    }, false);
    names[1].addEventListener('mouseout', function () {
        names[1].style.backgroundColor = '#BEFFE5';
    }, false);

    names[2].addEventListener('mouseover', function () {
        names[2].style.backgroundColor = 'azure';
    }, false);
    names[2].addEventListener('mouseout', function () {
        names[2].style.backgroundColor = '#BEFFE5';
    }, false);
}