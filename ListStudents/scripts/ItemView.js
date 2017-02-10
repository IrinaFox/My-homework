//For one line with datas of student
function createStudent (fullName, skype, gender, buttonName) {
    var content = document.getElementById('content'),
        studentLine = listTpl.replace(':fullName', fullName)
            .replace(':skype', skype)
            .replace(':gender', gender)
            .replace(':buttonName', buttonName),
		buttonDiv = document.createElement('div');
    
	buttonDiv.innerHTML = studentLine;
	
	content.appendChild(buttonDiv);
}

//Adding header
function addHeader () {
    var content = document.getElementById('content');
    content.innerHTML += headerTpl;
}
