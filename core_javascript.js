var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach((v, i) => console.log(v, i));
/*
undefined 0
1 1
*/
arr2.forEach((v, i) => console.log(v, i));
/*
1 1
*/

console.log(arr1.map((v, i) => v + i)); // [NaN, 2]
console.log(arr2.map((v, i) => v + i)); // [empty, 2]

console.log(arr1.filter((v, i) => !v)); // [undefined]
console.log(arr2.filter((v, i) => !v)); // []

console.log(arr1.reduce((p, c, i) => p + c + i, '')); // undefined011
console.log(arr2.reduce((p, c, i) => p + c + i, '')); // 11
