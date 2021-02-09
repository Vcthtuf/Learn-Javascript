'use strict';

let money, time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

chooseExpenses();

detectDayBudget();

checkSavings();

chooseOptExpenses()

console.log(appData);


// functions 

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

        if ((typeof (a)) == 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

function checkSavings() {
    appData.savings = confirm('Вы имеете накопления?');
    if (appData.savings === true) {
        let save = +prompt('Какова сумма Ваших накоплений?', ''),
            persent = +prompt('Под какой процент?', '');

        appData.monthIncome = (save * persent / 1200).toFixed(2);
        alert('Ваша прибыль в месяц: ' + appData.monthIncome);
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);

    alert('Ваш бюджет на день ' + appData.moneyPerDay);
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt('Введите статью необязательных расходов', '');
        if ((typeof (a)) == 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
            console.log('done');
            appData.optionalExpenses[i + 1] = a;
        } else {
            i--;
        }
    }
}





