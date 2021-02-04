'use strict'

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

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

appData.moneyPerDay = appData.budget / 30;

alert('Ваш бюджет на день ' + appData.moneyPerDay);

console.log(appData);






