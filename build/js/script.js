'use strict'

let money, time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpencses: {},
    income: [],
    savings: false
};

console.log(appData.budget);
console.log(appData.timeData);

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert('Ваш бюджет на день ' + appData.moneyPerDay);

console.log(appData);

checkSavings();

function start() {
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов', '');
        let b = +prompt('Во сколько обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    };
}

function checkSavings() {
    appData.savings = confirm('Вы имеете накопления?');
    if (appData.savings) {
        let save = +prompt('Какова сумма Ваших накоплений?', ''),
            persent = +prompt('Под какой процент?', '');

        appData.monthIncome = (save * persent / 1200).toFixed(2);
        alert('Ваша прибыль в месяц: ' + appData.monthIncome);
    }
}





