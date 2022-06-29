function drpJSON() {
    var data_file = "js/FriendsAndFamily.json";
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
    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {

            var jsonObj = JSON.parse(http_request.responseText);
            var Name = "";
            var LName = "";
            var Relation = "";
            for (var i = 0; i < jsonObj.people.length; i++) {
                if (jsonObj.people[i].relation == document.getElementById("Sel").value && document.getElementById("Sel").value != 0) {
                    Name = Name + jsonObj.people[i].name + "<br>";
                    LName = LName + jsonObj.people[i].lname + "<br>";
                    Relation = Relation + jsonObj.people[i].relation + "<br>";
                    var selection = i;
                    console.log(i);
                }
            }
            console.log(selection + "using my code");
            document.getElementById("Name").innerHTML = Name;
            document.getElementById("LName").innerHTML = LName;
            document.getElementById("Relation").innerHTML = Relation;
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}
//for the write in element
function searchJSON() {

    var data_file = "js/FriendsAndFamily.json";
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
         
    http_request.onreadystatechange = function () {
        
        if (http_request.readyState == 4) {

            var jsonObj = JSON.parse(http_request.responseText);

            var Name = "";
            var LName = "";
            var Relation = "";
            

            for (var i = 0; i < jsonObj.people.length; i++) {
                if (jsonObj.people[i].name.indexOf(document.getElementById("NameSearch").value) > -1 && document.getElementById("NameSearch").value != "") {

                    Name = Name + jsonObj.people[i].name;
                    LName = LName + jsonObj.people[i].lname;
                    Relation = Relation + jsonObj.people[i].relation;

                    var selection = i;
                    console.log(i);
                }
            }
            
            console.log(selection + "Using my code");
            document.getElementById("Name").innerHTML = Name;
            document.getElementById("LName").innerHTML = LName;
            document.getElementById("Relation").innerHTML = Relation;
        }
    }
    
    http_request.open("GET", data_file, true);
    http_request.send();
}