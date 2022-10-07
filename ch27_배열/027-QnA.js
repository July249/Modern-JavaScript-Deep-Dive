let undefinedArr = Array.from({ length: 3 });
console.log(undefinedArr); // [undefined, undefined, undefined]

let emptyArr = new Array(3);
console.log(emptyArr); // [<3 empty items>]

console.log(Object.getOwnPropertyDescriptors(undefinedArr));
// /*
// {
//   '0': {
//     value: undefined,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   '1': {
//     value: undefined,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   '2': {
//     value: undefined,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   length: { value: 3, writable: true, enumerable: false, configurable: false }
// }
// */
console.log(Object.getOwnPropertyDescriptors(emptyArr));
// /*
// {
//   length: { value: 3, writable: true, enumerable: false, configurable: false }
// }
// */
console.log('----------------');
let copyUndefinedArr1 = undefinedArr;
let copyEmptyArr1 = emptyArr;

console.log(copyUndefinedArr1); // [ undefined, undefined, undefined ]
console.log(Object.getOwnPropertyDescriptors(copyUndefinedArr1));
/* 
{
  '0': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  '2': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/
console.log(copyEmptyArr1); // [ <3 empty items> ]
console.log(Object.getOwnPropertyDescriptors(copyEmptyArr1));
/* 
{
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/
console.log('스프레드 복사---------------');
let copyUndefinedArr2 = [...undefinedArr];
let copyEmptyArr2 = [...emptyArr];

console.log(copyUndefinedArr2); // [ undefined, undefined, undefined ]
console.log(Object.getOwnPropertyDescriptors(copyUndefinedArr2));
/* 
{
  '0': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  '2': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/
console.log(copyEmptyArr2); // [ undefined, undefined, undefined ]
console.log(Object.getOwnPropertyDescriptors(copyEmptyArr2));
/* 
{
  '0': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  '2': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/
if (
  Object.getOwnPropertyDescriptors(copyUndefinedArr2) ==
  Object.getOwnPropertyDescriptors(copyEmptyArr2)
) {
  console.log(true);
} else {
  console.log(false);
}
// false
