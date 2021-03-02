'use strict';

let money, time;

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget_value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget_value')[0],
    expensesValue = document.getElementsByClassName('expenses_value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses_value')[0],
    incomeValue = document.getElementsByClassName('income_value')[0],
    monthSaving = document.getElementsByClassName('month_saving')[0],
    yearSaving = document.getElementsByClassName('year_saving')[0],
    expensesItem = document.getElementsByClassName('expenses_item'),
    button = document.getElementsByTagName('button'),
    buttonExpensesApprove = button[0],
    buttonOptexpensesApprove = button[1],
    buttonCountbudgetCalc = button[2],
    optExpensesItem = document.querySelectorAll('.optexpenses_item')[0],
    income = document.querySelector('.income_label'),
    savingCheck = document.querySelector('.saving_btn'),
    savingSum = document.querySelector('.saving_sum > input'),
    savingPercent = document.querySelector('.saving_percent > input'),
    yearValue = document.querySelector('.year_value'),
    monthValue = document.querySelector('.month_value'),
    dayValue = document.querySelector('.day_value');

startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = appData.budget;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

buttonExpensesApprove.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length / 2; i++) {
        let a = prompt('Введите обязательную статью расходов', '');
        let b = +prompt('Во сколько обойдется?', '');


        if ((typeof (a)) == 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }

});

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








