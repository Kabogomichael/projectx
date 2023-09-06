var burger = document.querySelector('#burger');
var menu = document.querySelector('#menu');
burger.addEventListener('click', function () {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
});


// let div = document.createElement("div");
// let p = document.createElement("p");
// let span = document.createElement("span");