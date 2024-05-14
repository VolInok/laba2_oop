let Names = {
    title: "",
    genre: "",
    time: "",
    amount: 0,
    rate: ""
}
function getData(){
    Names.title = document.getElementById("title").value;
    Names.genre = document.getElementById("genre").value;
    Names.time = document.getElementById("time").value;
    Names.amount = document.getElementById("amount").value;
    Names.rate = document.getElementById("rate").value;
    let namesJson = JSON.stringify(Names);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "write",true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(namesJson);
}