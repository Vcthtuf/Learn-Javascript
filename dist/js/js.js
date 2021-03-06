'use strict'

window.addEventListener('DOMContentLoaded', function () {

    // let startBtn = document.getElementById('start'),
    //     countButton = document.getElementsByClassName('countbudget_btn')[0],
    //     buttonExpensesApprove = document.getElementsByClassName('expenses_btn')[0],
    //     buttonOptexpensesApprove = document.getElementsByClassName('optexpenses_btn')[0];

    // startBtn.addEventListener('click', function () {
    //     countButton.removeAttribute('disabled', 'none');
    //     buttonOptexpensesApprove.removeAttribute('disabled', 'none');
    //     buttonExpensesApprove.removeAttribute('disabled', 'none');
    // });

    // let button = document.querySelectorAll('.btn');
    // button.forEach(function (item) {
    //     item.addEventListener('click', function (event) {
    //         let target = event.target;
    //         target.style.background = "green";
    //     });
    // });

    // let btn = document.querySelector('.expenses_btn');

    // btn.addEventListener('touchstart', function (e) {
    //     e.preventDefault();
    //     console.log(['touchstart']);
    //     console.log(e.target);

    // });

    // btn.addEventListener('touchend', function (e) {
    //     e.preventDefault();
    //     console.log(['touchend']);

    // });

    // btn.addEventListener('touchmove', function (e) {
    //     e.preventDefault();
    //     console.log(['touchmove']);

    // });

    // let str = 'My name is R2D2';

    // console.log(str.match(/\W/gi));

    // setTimeout(timeId, 3000);




    let timerId = setTimeout(function sayHello() {
        console.log('Hello!!!');
        setTimeout(sayHello, 3000);


    })

    clearTimeout(timerId);




});










