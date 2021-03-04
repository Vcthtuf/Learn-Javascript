'use strict';

let money, time;

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget_value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget_value')[0],
    expensesValue = document.getElementsByClassName('expenses_value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses_value')[0],
    incomeValue = document.getElementsByClassName('income_value')[0],
    monthSaving = document.getElementsByClassName('monthsaving_value')[0],
    yearSaving = document.getElementsByClassName('yearsaving_value')[0],
    countButton = document.getElementsByClassName('countbudget_btn')[0],

    expensesItem = document.getElementsByClassName('expenses_item'),
    button = document.getElementsByTagName('button'),
    buttonExpensesApprove = document.getElementsByClassName('expenses_btn')[0],
    buttonOptexpensesApprove = document.getElementsByClassName('optexpenses_btn')[0],
    buttonCountbudgetCalc = button[2],
    optExpensesItem = document.querySelectorAll('.optexpenses_item'),
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
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;


        if ((typeof (a)) == 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

buttonOptexpensesApprove.addEventListener('click', function () {
    console.log(optExpensesItem.length);
    for (let i = 0; i < optExpensesItem.length; i++) {
        let opt = optExpensesItem[i].value;
        console.log(opt);
        if ((typeof (opt)) == 'string' && (typeof (opt)) != null && opt != '' && opt.length < 50) {

            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        } else {
            i--;
        }
    }
});

countButton.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;
    }
    else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

income.addEventListener('input', function () {
    let items = income.value;
    if (typeof (items) == 'string' && typeof (items) != null && items != '') {
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    }
});

savingCheck.addEventListener('click', function () {
    if (appData.savings) {
        appData.savings = false;
    } else { appData.savings = true; }
});

savingSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +savingSum.value,
            percent = +savingPercent.value;
        appData.monthIncome = (sum * percent / 1200).toFixed(2);
        appData.yearIncome = (sum * percent / 100).toFixed(2);
        monthSaving.textContent = appData.monthIncome;
        yearSaving.textContent = appData.yearIncome;


    }

});

savingPercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +savingSum.value,
            percent = +savingPercent.value;
        appData.monthIncome = (sum * percent / 1200).toFixed(2);
        appData.yearIncome = (sum * percent / 100).toFixed(2);
        monthSaving.textContent = appData.monthIncome;
        yearSaving.textContent = appData.yearIncome;


    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};








