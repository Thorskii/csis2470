//change on the drop down
function drpJSON() {
    var data_file = "BookJson.json";
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
            // Javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(http_request.responseText);

            // jsonObj variable now contains the data structure and can
            // be accessed as jsonObj.name and jsonObj.country.
            var Title = "";
            var Author = "";
            var extra = "";
            for (var i = 0; i < jsonObj.book.length; i++) {
                if (jsonObj.book[i].authorid == document.getElementById("BookSel").value 
                        && document.getElementById("BookSel").value != 0) {
                    Title = Title + jsonObj.book[i].Title + "<br>";
                    Author = Author + jsonObj.book[i].Author + "<br>";
                    extra = extra + jsonObj.book[i].Year + "<p>"+jsonObj.book[i].Description+"</p>"
                    var selection = i;
                    console.log(i);
                }
            }
            console.log(selection + "using my code");
            document.getElementById("booklist").innerHTML = extra;
            document.getElementById("Title").innerHTML = Title;
            document.getElementById("Author").innerHTML = Author;
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}
//for the write in element
function wrtJSON() {

    var data_file = "BookJson.json";
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
            
            var Title = "";
            var Author = "";
            
            for (var i = 0; i < jsonObj.book.length; i++) {
                if (jsonObj.book[i].Author.indexOf(document.getElementById("AuthorName").value) > -1 && document.getElementById("AuthorName").value != "") {
                    Title = Title + jsonObj.book[i].Title + "<br>";
                    Author = Author + jsonObj.book[i].Author + "<br>";

                    var selection = i;
                    console.log(i);
                }
            }
            console.log(selection + "Using my code");
            document.getElementById("booklist").innerHTML = "";
            document.getElementById("Title").innerHTML = Title;
            document.getElementById("Author").innerHTML = Author;
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}