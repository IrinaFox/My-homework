var listTpl = '<div class="line">\
                    <div class="miniDiv">:fullName</div>\
                    <div class="miniDiv">:skype</div>\
                    <div class="miniDiv">:gender</div>\
                    <div class="miniDiv"><input type="button" name=":buttonName"  value="More" class="button"/></div>\
              </div>',
    headerTpl = '<div class="line" id="menu" >\
                    <div class="miniDiv">FULL NAME<img src="pics/name.png" class="pic"> </img></div>\
                    <div class="miniDiv">SKYPE<img src="pics/skype.png" class="pic"> </img></div>\
                    <div class="miniDiv">GENDER<img src="pics/gender.png" class="pic"> </img></div>\
                    <div class="miniDiv">MORE</div>\
              </div>',
    infoWindowTpl = '<div class="infoWindow" id="infoWindowList">:information</div> ';