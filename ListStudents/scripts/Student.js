//Constructor for creating students
function Student (name, lastName, gender, skype, phone, email, age) {
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.skype = skype;
    this.phone = phone;
    this.email = email;
    this.age = age;

    this.getShortForm = function () {
        var shortForm = {};

        shortForm.fullName = name  + " " +lastName;
        shortForm.skype = skype;
        shortForm.gender = gender;

        return shortForm;
    };
    this.getFullForm = function () {
        var fullForm = {};

        fullForm.name = name;
        fullForm.lastName = lastName;
        fullForm.gender = gender;
        fullForm.age = name;
        fullForm.skype = skype;

        return fullForm;
    };

    return this;
}