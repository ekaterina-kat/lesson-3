"use strict";

let titleProject;

let screensValue;
let screenPrice;
let percentage = 10;
let fullPrice = 200000;
let responsive;

let service;
let servicePrice;
// let service2 = prompt("Какой еще сервис тебе нужен");
// let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");

// console.log(fullPrice);
// if (fullPrice > 50000) {
//   console.log("скидка 10%");
// } else if (fullPrice === 50000) {
//   console.log("скидка 9%");
// } else if (fullPrice > 20000 && fullPrice < 50000) {
//   console.log("сделаем скидку 5%");
// } else if (fullPrice === 20000) {
//   console.log("скидка 4%");
// } else if (fullPrice > 0 && fullPrice < 20000) {
//   console.log("скидка не предусмотрена");
// } else if (fullPrice === 0) {
//   console.log("Ошибка: стоимость не может быть равна нулю!");
// } else if (fullPrice < 0) {
//   console.log("Что-то пошло не так");
// }

//FUNCTIONS

const asking = function () {
  titleProject = prompt("Название проекта?");

  screensValue = prompt(
    "Какие типы экранов: шаблонные, с уникальным дизайном, с анимациями"
  );

  responsive = Boolean(prompt("нужен ли респонсивный сайт: true / false?"));
};

// 1
// const getAllServicePrices = function () {
//   return servicePrice1 + servicePrice2;
// };

// 2
function getFullPrice() {
  return screenPrice + allServicePrices;
}

// 3

const getTitle = function (title) {
  let newTitle = title.trim().toLowerCase();
  return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
};

// 4
const getServicePercentPrice = function (price, percent) {
  return Math.round(price - (price / 100) * percent);
};

// 5

const getRollbackMessage = function () {
  let message;
  if (fullPrice > 50000) {
    message = "10%";
  } else if (fullPrice === 50000) {
    message = "9%";
  } else if (fullPrice > 20000 && fullPrice < 50000) {
    message = "5%";
  } else if (fullPrice === 20000) {
    message = "4%";
  } else if (fullPrice > 0 && fullPrice < 20000) {
    message = "не предусмотрена";
  } else if (fullPrice === 0) {
    message = "Ошибка: стоимость не может быть равна нулю!";
  } else if (fullPrice < 0) {
    message = "Что-то пошло не так";
  }

  return `Стоимость всего проекта ${fullPrice} рублей. Стоимость  всех услуг ${allServicePrices} рублей. 
Стоимость проекта с учетом скидки ${servicePercentPrice} рублей. Скидка ${message}.`;
};

// 1) Создаем проверку на число.

const checkIsNumber = function (yourNumber) {
  return !isNaN(parseFloat(yourNumber)) && isFinite(yourNumber);
};

// проверяем screenPrice
do {
  screenPrice = +prompt("Сколько будет стоить экран?");
} while (
  screenPrice === null ||
  screenPrice.trim() === "" ||
  !checkIsNumber(screenPrice) ||
  screenPrice < 0
);

screenPrice = +screenPrice;

// 3 getAllServicePrices + цикл for
const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 1; i <= 2; i++) {
    service = prompt("Какой сервис нужен");
    servicePrice;

    do {
      servicePrice = prompt("Сколько это будет стоить");
    } while (
      servicePrice === null ||
      servicePrice.trim() === "" ||
      !checkIsNumber(servicePrice)
    );

    sum += +servicePrice;
  }

  return sum;
};

// FUNCTION CALLS
// asking();
const allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
const servicePercentPrice = getServicePercentPrice(fullPrice, percentage);
console.log(getRollbackMessage());
console.log(getTitle(titleProject));
console.log(allServicePrices);
// console.log(fullPrice);
// console.log(getTitle(titleProject));
// console.log(servicePercentPrice);
// console.log(responsive);
// console.log(typeof responsive);
// console.log(typeof servicePrice1);
