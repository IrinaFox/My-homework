/**
 * Created by Liss on 02.02.2017.
 */


function StudentsList (students, placeName, placeGender, placeSkype) {
    this.students = students;
    this.placeName = placeName;
    this.placeGender = placeGender;
    this.placeSkype = placeSkype;

    this.showList = function () {
        this.students.forEach(function(item) {
            for(var key in item){
                if(key === 'name'){
                    console.log(item[key]);

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


