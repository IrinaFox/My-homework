var listTpl = '<div class="line">\
                    <div class="miniDiv">:fullName</div>\
                    <div class="miniDiv">:skype</div>\
                    <div class="miniDiv">:gender</div>\
                    <input type="button" name=":buttonName"  value="More" class="button"/>\
              </div>';

function createLine(fullName, skype, gender, buttonName) {
    var content = document.getElementById('content'),
        studentLine = listTpl.replace(':fullName', fullName)
                             .replace(':skype', skype)
                             .replace(':gender', gender)
                             .replace(':buttonName', buttonName);
    content.innerHTML += studentLine;
}