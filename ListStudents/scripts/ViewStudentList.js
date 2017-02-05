/* Created by Liss on 02.02.2017.*/

//View Student's list on the screen
function viewStudentList (students, placeName, placeGender, placeSkype) {
   students.forEach(function(item) {
       for (var key in item) {
           var keyValue = item[key];
               if (key === 'name') {
                   placeName.innerHTML += keyValue + '<br/><br/>';
               } else if (key === 'gender') {
                   placeGender.innerHTML += keyValue + '<br/><br/>';
               } else if (key === 'skype') {
                   placeSkype.innerHTML += keyValue + '<br/><br/>';
               }
       }
   });
}


