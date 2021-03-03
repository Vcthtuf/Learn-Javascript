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
        console.log('done');
        console.log(opt);
        if ((typeof (opt)) == 'string' && (typeof (opt)) != null && opt != '' && opt.length < 50) {

            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
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








