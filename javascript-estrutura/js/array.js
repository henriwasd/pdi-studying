var avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

// console.log('Temp Jan: ' + avgTemp[1]);

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 0; i < daysOfWeek.length; i++) {
  // console.log(daysOfWeek[i]);
}

var fibonacci = [0, 1, 1];

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// console.log(fibonacci);

for (let i = 0; i < fibonacci.length; i++) {
  // console.log(fibonacci[i]);
}

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.push(10);
numbers.push(11);
numbers.push(12);
numbers.push(13);
numbers.push(14);
numbers.push(15);
numbers.push(16);

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
numbers.unshift(-4);

numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();

numbers.splice(3, 3);

// console.log(numbers);

numbers.splice(3, 0, 3, 4, 5);

// console.log(numbers);


var avgTempWeek = [];

var avgTempWeek1 = [31.9, 35.3, 42, 38, 26.5, 33.9, 31.3, 45, 31, 29.5];
var avgTempWeek2 = [32.3, 35.5, 41.5, 39.5, 26.5, 32.9, 31.3, 45.5, 31.5, 29.5];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

for (var i = 0; i < avgTempWeek.length; i++) {
  for (var j = 0; j < avgTempWeek[i].length; j++) {
    // console.log(avgTempWeek[i][j]);
  }
}

var avgTempWeek3 = [32.3, 35.5, 41.5, 39.5, 26.5, 32.9, 31.3, 45.5, 31.5, 29.5];
var avgTempWeek4 = [32.5, 35.7, 41.1, 39.3, 26.2, 32.6, 31.4, 45.7, 31.8, 29.9];

var firstWeek = [];
var lastWeek = [];

var month = [];


firstWeek = [avgTempWeek1, avgTempWeek2];
lastWeek = [avgTempWeek3, avgTempWeek4];

month = [firstWeek, lastWeek];

for (let x = 0; x < month.length; x++) {
  for (let y = 0; y < month[x].length; y++) {
    for (let z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z]);
    }
  }
}
