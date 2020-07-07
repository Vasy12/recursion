'use strict';

function sayHello() {
  alert( 'Function declaration: Hello' );
}

const sayHello2 = function () {
  alert( 'Function expresion: Hello' );
};

const arrowSayHello = () => {
  alert( 'Arrow function expresion: Hello' );
};

function say(value) {
  console.log( value );
}

const expressionSay = function (value) {
  console.log( value );
};

const arrowSay = value => {
  console.log( value );
};

const arrowPow = base => base * base;

const pow = (base, exponent) => {
  if (exponent === 0) {
    return 0;
  }
  if (exponent === 1) {
    return base;
  }
  return exponent < 0
         ? 1 / pow( base, Math.abs( exponent ) )
         : base * pow( base, exponent - 1 );
};

const x = (a, b, c, d) => a * b * c * d;

function MyArray() {

  if (new.target) {
    this.length = 0;

    for (let i = 0; i < arguments.length; ++i) {
      this[this.length++] = arguments[i];
    }
  }

}

const myArr = new MyArray( 1, 2, 3, 45, 6, 7, 98, );

function sum() {
  let total = null;

  for (let i = 0; i < arguments.length; ++i) {
    total += arguments[i];
  }

  return total;

}

console.log( 'SUM = ', sum( 1, 2, 3, 4, 5 ) ); // expected result 15

/**
 *
 * @return {number} - total sum of arguments
 */
const arrowSum = (...args) => {

  let total = null;

  for (let i = 0; i < args.length; ++i) {
    total += args[i];
  }

  return total;

};

console.log( 'ARROW SUM = ', arrowSum( 1, 2, 3, 4, 5 ) ); // expected result 15
