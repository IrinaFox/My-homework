/**
 * Created by Liss on 03.02.2017.
 */

//function for creating array with list of students
function createStudentList () {
    var irina = new Student("Irina", "female", "princess_rina88", "+380505610891", "irina.fox88@gmail.com");
    var svetlana = new Student("Svetlana", "female", "ami-caty", "+380663334455", "svetlana.sunny@gmail.com");
    var polina = new Student("Polina", "female", "polina_volna", "+380934445566", "poluina.catty3@gmail.com");
    var elena = new Student("Elena", "female", "izaya256", "+380666668888", "elena.flower123@gmail.com");
    var alexey = new Student("Alexey", "male", "dn100980rev", "+380998885511", "alexey.rembo25@gmail.com");
    var vladimir = new Student("Vladimir", "male", "vovanium", "+380634207163", "vladivir.terminator55@gmail.com");

    return [irina, svetlana, polina, elena, alexey, vladimir];
}

