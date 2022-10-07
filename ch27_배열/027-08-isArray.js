// Array.isArray는 Array 생성자 함수의 정적 메서드 이다
// Array.isArray 메서드는 전달된 매개변수가 배열이면 true, 배열이 아니면 false를 반환한다

// 27-42
// true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());

// false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ 0: 1, length: 1 });

// check - obj vs arr
let arr = [1];
let obj = { 0: 1, length: 1 };
console.log(arr); // [1]
console.log(obj); // { '0': 1, length: 1 }
console.log(Object.getOwnPropertyDescriptors(arr));
/* 
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  length: { value: 1, writable: true, enumerable: false, configurable: false }
}
*/
console.log(Object.getOwnPropertyDescriptors(obj));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  length: { value: 1, writable: true, enumerable: true, configurable: true }
}
*/
/* 
length 프로퍼티의 enumerable, configurable 값에 차이가 있다
*/
