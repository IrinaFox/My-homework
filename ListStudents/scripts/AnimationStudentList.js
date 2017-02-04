/**
 * Created by Liss on 04.02.2017.
 */
//make the window brigth - when mouse on it
function AnimationStudentList() {
 var names = document.getElementById('names'),
     gender = document.getElementById('gender'),
     skype = document.getElementById('skype');

    names.addEventListener('mouseover', function () {
        names.removeAttribute('class');
        names.setAttribute('class','brightDiv');
    }, false);

}