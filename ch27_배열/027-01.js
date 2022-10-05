// 배열이란?

// 27-01 배열 리터럴을 이용한 생성
const arr1 = ['apple', 'banana', 'orange'];

// 27-02 배열 내 요소 접근
console.log(arr1[0]); // apple
console.log(arr1[1]); // banana
console.log(arr1[2]); // orange

// 27-03 length 프로퍼티 - 배열의 길이
console.log(arr1.length); // 3

// 27-04 배열의 순회
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]); // apple, banana, orange
}

// 27-05 배열의 타입 === 객체
console.log(typeof arr1); // object

// 27-06 배열의 생성 방법
/* 
1. 배열 리터럴
2. Array 생성자 함수
3. Array.of
4. Array.from
*/
const arr2 = [1, 2, 3];

// 배열의 생성자 함수는 Array
// 배열의 프로토타입 객체는 Array.prototype
console.log(arr2.constructor === Array); // true
console.log(Object.getPrototypeOf(arr2) === Array.prototype); // true

// 일반 객체와 배열의 차이
/* 
구분 - 객체 / 배열
구조 - 프로퍼티 키와 값 / 인덱스와 요소
값의 참조 - 프로퍼티 키 / 인덱스
값의 순서 - x / o
length 프로퍼티 - x / o
*/
// index로 표현되는 값의 순서, length 프로퍼티를 가지므로 반복문을 사용하여 순차적으로 값에 접근히기 용이하다

// 27-07
const arr3 = [1, 2, 3];

// 반복문으로 자료구조를 순서대로 순회하기 위해서는 자료구조의 요소에 순서대로 접근할 수 있어야 한다
// 때문에 자료구조의 길이를 알 수 있어야 한다
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]); // 1 2 3
}
