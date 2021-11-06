// function Stack() {
//   let items = [];

//   this.push = function (element) {
//     items.push(element);
//   };

//   this.pop = function () {
//     return items.pop();
//   };

//   this.peek = function () {
//     return items[items.length - 1];
//   };

//   this.isEmpty = function () {
//     return items.length === 0;
//   };

//   this.clear = function () {
//     items = [];
//   };

//   this.size = function () {
//     return items.length;
//   };

//   this.print = function () {
//     console.log(items.toString());
//   };
// }

// let stack = new Stack();

// console.log(stack.isEmpty());
// stack.push(2);
// stack.print();
// stack.push(4);
// stack.print();
// stack.push(6);
// stack.print();
// stack.push(8);
// stack.print();
// stack.push(10);
// stack.print();
// stack.pop();
// stack.print();
// stack.pop();
// stack.print();
// stack.pop();
// stack.print();
// stack.pop();
// stack.print();
// stack.pop();
// console.log(stack.isEmpty());

// stack.print();

function dec2Bin(decNumber) {
  var restStack = [],
  restStack,
  binaryString = '';

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / 2);
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString();
  }

  return binaryString;
}

// console.log(dec2Bin(25));

function baseConverter(decNumber, base) {
  var restStack = [],
  restStack,
  baseString = '',
  digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / base);
  }

  while (restStack.length > 0) {
    baseString += digits[restStack.pop()];
  }

  return baseString;
  
}

console.log(baseConverter(123, 2));
