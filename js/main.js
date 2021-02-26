'use strict'; 

let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n) && (n.trim() !== ''));
},
randomInt;

function findNumber() {

  // function getRandomInt() {
  //   let q = (Math.floor(Math.random() * 100) + 1);
  //   return q;
  // }
  let a = prompt('Угадай число от 1 до 100'),
  check = false;    
  if (a === null) {
    alert('Игра завершена!');
    check = true;
    return;
  } else if (!isNumber(a)) {
    alert('Введи число!');
    findNumber();
  }

  function checkNumber() {
    let result = +a - randomInt;
    if (result === 0) {
      alert('Поздравляю, Вы угадали!!!');
      let gameOver = confirm("Сыграем ещё?");
      if (gameOver === true) {
        randomInt = undefined;
        findNumber();
      }
    } else if (result < 0) {
      alert('Загаданное число больше');
      console.log('число равно ' + randomInt);
      findNumber();
    } else {
      alert('Загаданное число меньше');
      console.log('число равно ' + randomInt);
      findNumber();
    }
  }

  if ((check === false) && (randomInt !== undefined)) {
    checkNumber();
  } else if ((randomInt === undefined) && (check === false)){
    randomInt = (Math.floor(Math.random() * 100) + 1);
    checkNumber();
  } else {
    return;
  }

  console.log('число равно ' + randomInt);
}

findNumber();







