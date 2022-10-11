// slice
// 매개변수로 전달된 범위의 요소들을 복사하여 배열로 반환
// 원본 배열은 변경되지 않음

// const arr = [1, 2, 3];
// arr.slice("start", "end");
/* 
  start: 복사를 시작할 인덱스
  end: 종료할 인덱스 (이 인덱스의 요소는 복사되지 않는다)
*/

// 27-67
const arr1 = [1, 2, 3];

arr1.slice(0, -1); // [1]
arr1.slice(1, 2); // [2]
console.log(arr1); // [1, 2, 3] // 원본은 변경되지 않는다

// 27-68
// slice 메서드의 두번째 매개변수를 생략하면 첫 번째 매개변수부터 모든 요소를 복사하여 배열로 반환한다
const arr2 = [1, 2, 3];
arr2.slice(1); // [2, 3]

// 27-69
const arr3 = [1, 2, 3];

arr3.slice(-1); // [3]
arr3.slice(-2); // [2, 3]

// 27-70
// slice 메서드의 매개변수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환
const arr4 = [1, 2, 3];

const copy = arr4.slice();
console.log(copy);
console.log(copy === arr4); // false // 얕은 복사를 통해 생성된다

// 27-71
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false },
];

// 얕은 복사 (shallow copy)
const _todos = todos.slice();
// const _todos = [ ...todos ];

// _todos와 todos는 참조값이 다른 별개의 객체이다
console.log(_todos === todos); // false

// 배열 요소의 참조값이 같다 즉, 얕은 복사가 되었다
console.log(_todos[0] === todos[0]); // true

/* 
slice 메서드, spread 문법, Object.assign 메서드는 모두 얕은 복사를 수행

깊은 복사를 위해서는 Lodash 라이브러리 cloneDeep 메서드를 사용하는 것이 좋다
*/

// slice 메서드가 복사본을 생성하는 것을 이용하여 arguments, HTMLCollection, NodeList 같은 유사 배열 객체를 배열로 반환할 수 있다
// 27-72
function sum() {
  // 유사 배열 객체를 배열로 변환
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr); // [1, 2, 3]

  return arr.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3)); // 6

// 27-73 - Array.from 메서드를 활용한 유사 배열 객체 (또는 이터러블 객체)를 배열로 변환
function sum() {
  const arr = Array.from(arguments);
  console.log(arr); // [1, 2, 3]

  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6

/* 
arguments 객체는 유사 배열 객체이면서 이터러블 객체이다

이터러블 객체는 스프레드 문법을 사용하여 간단하게 배열로 변환할 수 있다
*/
// 27-74
function sum() {
  const arr = [...arguments];
  console.log(arr); // [1, 2, 3]

  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
