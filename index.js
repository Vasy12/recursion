'use strict';

/**
 * Recursion
 */

/*function logRange(min,max) {
 if(min > max || min === undefined|| max === undefined) return false;

 console.log(min);

 if (min < max) {
 logRange( ++min, max );
 }

 return true;
 }

 const result = logRange(1,10);

 console.log(result);*/

/*
 function nestedWrapper(level){
 let arr = [];
 nested(level);

 function nested(level) {
 if(level > 0){
 arr=arr.concat(['(']);
 nested(--level);
 // эта часть отрабатывает после завершения работы рекурсивного вызова
 arr=arr.concat([')']);
 }
 }
 return arr.join('');
 }

 const res = nestedWrapper(3);

 console.log(res);*/

/*
 function nested2(level) {
 if(level === 1){
 return '()';
 }

 return `(${nested2(level-1)})`;
 }

 console.log(nested2(4));
 */

/*function power(base, pow) {
 if(pow === 0) return 1;

 if(pow > 1){
 return base *= power(base, --pow);
 }

 }

 console.log(power(2,3));*/

const nestedArr = [
  1,
  2,
  ,
  3,
  [,
    8,
    [9
      ,
      [
        10
      ]
    ]
  ],
  5
];

function customFlat(array, depth = 1) {
  let newArr = [];
  debugger;
  if(depth < 0) return array;

  if(depth === 0) return array.filter(i => i !== undefined);

  for (let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){
      newArr = newArr.concat(customFlat(array[i],depth-1));
    } else if(array[i] !== undefined){
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log('original array ->',nestedArr);

const resultedArr =  customFlat(nestedArr,6);
console.log('result=>',resultedArr);

console.log('control=>',nestedArr.flat(-10));
