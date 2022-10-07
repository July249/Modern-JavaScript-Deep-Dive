// 배열 생성

// 1. 배열 리터럴
/* 
0개 이상의 요소를 쉼표로 구분하여 대괄호로 묶는다

프로퍼티 키가 없고(사실 인덱스가 이 부분을 채운다) 값만 존재한다
*/

// 27-18
const arr1 = [1, 2, 3];
console.log(arr1.length); // 3

// 27-19
const arr2 = [];
console.log(arr2.length); // 0

// 27-20 - 희소 배열 생성
const arr3 = [1, , 3];
console.log(arr3.length); // 3
console.log(arr3); // [1, <empty item>, 3]
console.log(arr3[1]); // undefined

// 2. Array 생성자 함수
// [Warning] Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요하다

// 27-21
const arr4 = new Array(10); // length 프로퍼티가 10인 배열 생성
console.log(arr4); // [ <10 empty items> ]
console.log(arr4.length); // 10

// 27-22
console.log(Object.getOwnPropertyDescriptors(arr4));
/* 
{
  length: { value: 10, writable: true, enumerable: false, configurable: false }
}
*/

// 27-23 배열의 요소 범위 초과 에러, RangeError
// 배열은 요소를 최대 4,294,967,295개 가질 수 있다
const arr5 = new Array(4294967295);

// 최대로 가질 수 있는 요소의 개수를 벗어나면 에러가 발생한다
// const arrError1 = new Array(4294967296); // RangeError: Invalid array length
// const arrError2 = new Array(-1); // RangeError: Invalid array length

// 3. Array.of
// 전달된 매개변수를 요소로 가지는 배열을 생성한다

// 27-27
console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of('string')); // ['string']

// 4. Array.from
// 유사배열객체(array-like object) 또는 이터러블 객체(iterable object)를 매개변수로 전달 받아 배열로 변환하여 반환

// 27-28
// 유사 배열 객체 => 배열
const arr6 = Array.from({ length: 2, 0: 'a', 1: 'b' });
console.log(arr6); // ['a', 'b']
// 이터러블 객체 => 배열
const arr7 = Array.from('Hello');
console.log(arr7); // [ 'H', 'e', 'l', 'l', 'o' ]

// 27-29
// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다
const arr8 = Array.from({ length: 3 });
console.log(arr8);
console.log(Object.getOwnPropertyDescriptors(arr8));
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
const arr9 = [];
arr9.length = 3;
console.log(arr9);
console.log(Object.getOwnPropertyDescriptors(arr9));
/* 
{
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/
const arr10 = [, , ,];
console.log(arr10);
console.log(Object.getOwnPropertyDescriptors(arr10));
/* 
{
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

const arr11 = new Array(3);
console.log(arr11);
console.log(Object.getOwnPropertyDescriptors(arr11));
/* 
{
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

// Array.from은 두 번째 매개변수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다
const arr12 = Array.from({ length: 3 }, (_, i) => i);
console.log(arr12); // [0, 1, 2]

// 유사 배열 객체와 이터러블 객체
/* 
유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다

유사배열 객체는 마치 배열처럼 for 문으로 순회할 수도 있다
*/
// 27-30 - 유사 배열 객체
const arrayLike = {
  0: 'apple',
  1: 'banana',
  2: 'orange',
  length: 3,
};

// 유사 배열 객체는 마치 배열처럼 for 문으로 순회할 수도 있다
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]); // apple banana orange
}

/* 
이터러블 객체는 Symbol.iterator 메서드를 구현하여 for ... of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있는 객체를 말한다

ES6에서 제공하는 빌트인 이터러블은 Array, String, Map, Set, DOM Collection(NodeList, HTMLCollection), arguments 등이 있다
*/
