// 배열 요소의 삭제

// 자바스크립트에서의 배열은 사실상 객체이기 때문에 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다

// 27-39
const arr1 = [1, 2, 3];

console.log(Object.getOwnPropertyDescriptors(arr1));
/* 
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

// 배열 요소의 삭제
delete arr1[1];
console.log(arr1); // [ 1, <1 empty item>, 3 ]

console.log(Object.getOwnPropertyDescriptors(arr1));
/* 
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

// length 프로퍼티에 영향을 주지 않는다 즉, 희소배열이 된다
console.log(arr1.length); // 3

/* 
delete 연산자를 사용하는 방법은 희소배열을 생성하기 때문에 사용하지 않는 것이 좋다

희소배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제하려면 Array.prototype.splice 메서드를 사용한다
*/

// 27-40 - splice를 이용한 요소의 삭제
const arr2 = [1, 2, 3];
console.log(Object.getOwnPropertyDescriptors(arr2));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

// Array.prototype.splice(삭제를 시작할 index, 삭제할 요소 수)
// arr2[1]부터 1개의 요소를 제거
arr2.splice(1, 1);
console.log(arr2); // [1, 3]
console.log(Object.getOwnPropertyDescriptors(arr2));
/* 
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 2, writable: true, enumerable: false, configurable: false }
}
*/

// length 프로퍼티가 자동 갱신된다
console.log(arr2.length); // 2
