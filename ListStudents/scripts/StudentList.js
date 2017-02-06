//function for creating array with list of students
function createStudentList () {
    var irina = new Student("Irina", 'Ruban', "female", "princess_rina88", "+380505610891", "irina.fox88@gmail.com", '22');
    var svetlana = new Student("Svetlana", 'Ovcharenko', "female", "ami-caty", "+380663334455", "svetlana.sunny@gmail.com", '18');
    var polina = new Student("Polina", 'Zhylyaeva', "female", "polina_volna", "+380934445566", "poluina.catty3@gmail.com", '18');
    var elena = new Student("Elena", 'Ryndina', "female", "izaya256", "+380666668888", "elena.flower123@gmail.com", '18');
    var alexey = new Student("Alexey", 'Grigoryev', "male", "dn100980rev", "+380998885511", "alexey.rembo25@gmail.com", '20');
    var vladimir = new Student("Vladimir", 'Timofeev', "male", "vovanium", "+380634207163", "vladivir.terminator55@gmail.com", '20');

    return [irina, svetlana, polina, elena, alexey, vladimir];
}