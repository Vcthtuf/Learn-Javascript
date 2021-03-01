'use strict';

let money, time;

let startCalc = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget_value'),
    dayBudgetValue = document.getElementsByClassName('daybudget_value'),
    expensesValue = document.getElementsByClassName('expenses_value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses_value'),
    incomeValue = document.getElementsByClassName('income_value'),
    monthSaving = document.getElementsByClassName('month_saving'),
    yearSaving = document.getElementsByClassName('year_saving');

budgetValue[0].value = 45;

console.log(budgetValue[0]);
console.log(dayBudgetValue[0]);
console.log(expensesValue[0]);
console.log(optionalExpensesValue[0]);
console.log(incomeValue[0]);
console.log(monthSaving[0]);
console.log(yearSaving[0]);


// start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Ваш бюджет на день ' + appData.moneyPerDay);
    },
    checkSavings: function () {
        appData.savings = confirm('Вы имеете накопления?');
        if (appData.savings === true) {
            let save = +prompt('Какова сумма Ваших накоплений?', ''),
                persent = +prompt('Под какой процент?', '');
            appData.monthIncome = (save * persent / 1200).toFixed(2);
            alert('Ваша прибыль в месяц: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Введите статью необязательных расходов', '');
            if ((typeof (a)) == 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
                console.log('done');
                appData.optionalExpenses[i + 1] = a;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход (Перечислите через запятую)', '');
        if (typeof (items) == 'string' && typeof (items) != null && items != '') {
            appData.income = items.split(', ');
        }
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
        appData.income.forEach((item, index, income) => {
            alert(`${index + 1}.  ${item}`);
        });
    }
};

console.log(appData);

// functions 

function start() {
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}





