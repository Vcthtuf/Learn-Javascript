'use strict'

let button = document.querySelectorAll('button');

button.forEach(function (item) {
    item.addEventListener('click', function (event) {
        let target = event.target;
        target.style.background = "green";
    });
});

