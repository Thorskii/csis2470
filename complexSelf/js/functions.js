function loadJSON() {
    var data_file = "Me.json";
    var http_request = new XMLHttpRequest();
    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();

    } catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }
    
    
    http_request.onreadystatechange = function() {
                
        if (http_request.readyState == 4  ) {
    
           var jsonObj = JSON.parse(http_request.responseText);

           var Name = "";
           let Age = '';
           var Married;
           var Classes = "";
           var HobbiesName = "";
           var HobbiesDesc = "";

           for (var i = 0; i < jsonObj.me.length; i++) {
                Name = Name + jsonObj.me[i].name;
                Age = Age + jsonObj.me[i].age;
                Married = Married + jsonObj.me[i].married;
                Classes = Classes + jsonObj.me[i].classes;
                HobbiesName = HobbiesName + jsonObj.me[i].hobbies.name;
                HobbiesDesc = HobbiesDesc + jsonObj.me[i].hobbies.description;
           }
    
           document.getElementById("Name").innerHTML = Name;
           document.getElementById("Age").innerHTML = Age;
           if (Married == false) {
            document.getElementById("Married").innerHTML = "No";
           } else {
            document.getElementById("Married").innerHTML = "Yes";
           }
           document.getElementById("Classes").innerHTML = Classes;
           document.getElementById("Hobbies").innerHTML = HobbiesName+": "+HobbiesDesc;
        }
     }
    http_request.open("GET", data_file, true);
    http_request.send();
}