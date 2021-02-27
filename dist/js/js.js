'use strict'

let box = document.querySelector('#box'),
    button = document.querySelectorAll('.buttons button'),
    circle = document.getElementsByClassName('circle'),
    circles = document.querySelector('.circles'),
    heart = document.querySelectorAll('.hearts .heart'),
    buttons = document.querySelector('.buttons');

let div = document.createElement('div');
div.classList.add('yellow');
document.body.appendChild(div);
document.body.insertBefore(div, buttons);

let yellow = document.querySelector('.yellow');

circles.removeChild(circle[0]);

yellow.textContent = 'Привет, это написано с помощью JavaScript';



console.log(yellow);