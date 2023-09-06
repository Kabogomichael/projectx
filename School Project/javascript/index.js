for (let i=1; i <= 10 ; i++){
    console.log(i);
}

onclick='document.getElementById("demo").innerHTML="Hello javascript"'


function checkCookies(){
    var text = "";
    if (navigator.cookieEnabled === true) {
        text = "coookies are enable.";
    } else{
        text = "Cookies are not enabled.";
    }
    document.getElementById("cooks").innerHTML = text;
}

function sayHi() {
    console.log("Hi")
}
sayHi()