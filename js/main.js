'use strict'; 
let a = 10;
let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n) && (n.trim() !== ''));
};

function findNumber() {
  function tabNumber() {
    let a = prompt('Угадай число от 1 до 100');
    if (a === null) {
      alert('Игра завершена!');
      return;
    } else if (!isNumber(a)) {
      alert('Введи число!');
      tabNumber();
    }
    return a;
  }
  const b = 10;
  return tabNumber() - b;
}


function isRight() {
  let number = findNumber();
  if (number === 0) {
    console.log('Поздравляю, Вы угадали!!!');
  } else if (number < 0) {
    console.log('Загаданное число больше');
  } else {
    console.log('Загаданное число меньше');
  }
}
isRight();






