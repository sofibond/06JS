'use strict'; 
let a = 10;
let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n) && (n.trim() !== ''));
};

function findNumber() {
  let a = prompt('Угадай число от 1 до 100');
  let check = false;
  if (a === null) {
    alert('Игра завершена!');
    check = true;
    return;
  } else if (!isNumber(a)) {
    alert('Введи число!');
    findNumber();
  }
  const b = 10;
  let result = a - b;

  function checkNumber() {
    if (result === 0) {
      alert('Поздравляю, Вы угадали!!!');
      let gameOver = confirm("Сыграем ещё?");
      if (gameOver === true) {
        findNumber();
      }
    } else if (result < 0) {
      alert('Загаданное число больше');
      findNumber();
    } else {
      alert('Загаданное число меньше');
      findNumber();
    }
  }
  if (check === false) {
    checkNumber();
  } else {
    return;
  }
}

findNumber();







