/**
 * Created by Liss on 02.02.2017.
 */

//Constructor for making prepared list for adding to the page
function StudentsList (students, placeName, placeGender, placeSkype) {
    this.students = students;
    this.placeName = placeName;
    this.placeGender = placeGender;
    this.placeSkype = placeSkype;

    this.showList = function () {
        this.students.forEach(function(item) {
            for (var key in item) {
                if (key === 'name') {
                  placeName.innerHTML += item[key] + '<br/><br/>';
                } else if (key === 'gender') {
                    placeGender.innerHTML += item[key] + '<br/><br/>';
                } else if (key === 'skype') {
                    placeSkype.innerHTML += item[key] + '<br/><br/>';
                }
            }
        });
    }
}


