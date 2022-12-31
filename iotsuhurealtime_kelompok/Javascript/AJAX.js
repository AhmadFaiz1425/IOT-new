function LevelBahaya(value) {
    var audio1 = new Audio("Audio/beep-warning-6387.mp3");

    if (value == 1) {
        audio1.play();
    }
    else if (value == 2) {

    }
}

function reqListener () {
    console.log(this.responseText);
}

function getData() {
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
        var obj = JSON.parse(this.responseText);
        document.getElementById("suhu").innerHTML = obj.suhu.toString();
        document.getElementById("kelembapan").innerHTML = obj.kelembapan.toString();

        var status = document.getElementById("status");
        var suhu = parseFloat(obj.suhu.toString());
        if (suhu > 31) {
            var color = "red";
            status.innerHTML = "Panas";
            status.parentElement.style.backgroundColor = color;
            status.parentElement.parentElement.style.borderTopColor = color;
        }
        else if (suhu > 30) {
            var color = "yellow";
            status.innerHTML = "Hangat";
            status.parentElement.style.backgroundColor = color;
            status.parentElement.parentElement.style.borderTopColor = color;
            LevelBahaya(1);
        }
        else if (suhu > 28) {
            var color = "green";
            status.innerHTML = "Normal";
            status.parentElement.style.backgroundColor = color;
            status.parentElement.parentElement.style.borderTopColor = color;
        }
        else if (suhu > 26) {
            var color = "rgb(0, 137, 137)";
            status.innerHTML = "Dingin";
            status.parentElement.style.backgroundColor = color;
            status.parentElement.parentElement.style.borderTopColor = color;
        }
        else {
            var color = "blue";
            status.innerHTML = "!Berbahaya!";
            status.parentElement.style.backgroundColor = color;
            status.parentElement.parentElement.style.borderTopColor = color;
        }
    };

    oReq.open("get", "data.php", true);

    oReq.send();

    setTimeout( () => {
        getData();
    }, 1000);
}

getData();
