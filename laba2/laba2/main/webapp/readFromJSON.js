let xhr = new XMLHttpRequest();
let jsonStr;
let jsonObj;
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        jsonStr = xhr.responseText;
        jsonObj = JSON.parse(jsonStr);
        let table_body = document.getElementById("table_body")
        for (let element of jsonObj) {
            let str = "";
            table_body.innerHTML += "<tr>";
            for (value of Object.values(element)) {
                str += "<td>" + value + "</td>";
            }
            table_body.innerHTML += str;
            table_body.innerHTML += "</tr>";
        }
    }
}
xhr.open("POST", "read", true);
xhr.getResponseHeader("Content-type", "application/json");
xhr.send("1");