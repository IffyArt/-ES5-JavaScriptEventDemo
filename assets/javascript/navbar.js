var str = '產出亂碼 - ';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (var i = 1; i <= 10; i++) {
  if (i <= 9) {
    str = str + getRandomInt(100) + '、';
  } else {
    str = str + getRandomInt(100);
  }
}

document.write(str);
