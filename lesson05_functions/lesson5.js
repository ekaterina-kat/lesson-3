"use strict";
let titleProject = prompt("Название проекта?");
// console.log(titleProject);

// let screensValue = prompt(
//   "Какие типы экранов: шаблонные, с уникальным дизайном, с анимациями"
// );
let screenPrice = 10000;
let percentage = 10;
let fullPrice = 200000;
// let responsive = Boolean(prompt("нужен ли респонсивный сайт: true / false?"));
// console.log(responsive);
// console.log(typeof responsive);

let service1 = prompt("Какой сервис нужен");
let servicePrice1 = +prompt("Сколько это будет стоить");
// console.log(typeof servicePrice1);
let service2 = prompt("Какой еще сервис тебе нужен");
let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");

/*
fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.round(
  fullPrice - (fullPrice / 100) * percentage
);

// console.log(fullPrice);
if (fullPrice > 50000) {
  console.log("скидка 10%");
} else if (fullPrice === 50000) {
  console.log("скидка 9%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
  console.log("сделаем скидку 5%");
} else if (fullPrice === 20000) {
  console.log("скидка 4%");
} else if (fullPrice > 0 && fullPrice < 20000) {
  console.log("скидка не предусмотрена");
} else if (fullPrice === 0) {
  console.log("Ошибка: стоимость не может быть равна нулю!");
} else if (fullPrice < 0) {
  console.log("Что-то пошло не так");
}
*/

// 1
const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices();
console.log(allServicePrices);

// 2
function getFullPrice() {
  return screenPrice + allServicePrices;
}

fullPrice = getFullPrice();
console.log(fullPrice);

// 3

const getTitle = function (title) {
  let newTitle = title.trim().toLowerCase();
  return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
};

console.log(getTitle(titleProject));

// 4
const getServicePercentPrice = function (price, percent) {
  return Math.round(price - (price / 100) * percent);
};

const servicePercentPrice = getServicePercentPrice(fullPrice, percentage);
console.log(servicePercentPrice);

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

console.log(getRollbackMessage());
