// 자바스크립트 배열은 배열이 아니다

// 자료구조에서의 정의하는 일반적인 배열이란,
/*
자료구조에서 말하는 배열 === 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열되며 자료구조

즉, 배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다

이러한 배열을 "밀접 배열"(dense array)이라 한다

이처럼 일반적 의미의 배열은 각 요소가 동일한 데이터 크기를 가지며, 빈틈없이 연속적으로 이어져 있으므로 인덱스를 통해 단 한 번의 연산으로 임의의 요소에 접근(임의 접근, 상수 시간 복잡도)할 수 있다

이처럼 배열은 인덱스를 통해 효율적으로 요소에 접근할 수 있다는 장점이 있다

하지만 정렬되지 않은 배열에서 특정한 요소를 검색하는 경우 배열의 모든 요소를 처음부터 특정 요소를 발견할 때까지 차례로 검색 (선형 검색, 1차 시간 복잡도)해야 한다

배열에 요소를 삽입하거나 삭제하는 경우 배열의 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 한다는 단점이 있다
*/

//  27-08
// 선형 검색을 통해 배열(array)에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환
function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1

// 자바스크립트에서의 배열
/* 
자바스크립트에서의 배열은 배열의 요소를 위한 각각의 메모리 공간이 동일한 크기를 가지지 않아도 되며, 연속적으로 이어져 있지 않을 수도 있다

배열의 요소가 연속적으로 이어져 있지 않은 배열을 "희소 배열"(sparse array)라 한다

따라서 자바스크립트의 배열은 엄밀히 일반적 의미의 배열이 아니다

자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다
*/

// 27-09
// 16.2 "프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체" 참고
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
/* 
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true}
  '1': {value: 2, writable: true, enumerable: true, configurable: true}
  '2': {value: 3, writable: true, enumerable: true, configurable: true}
  length: {value: 3, writable: true, enumerable: false, configurable: false}
}
*/

/* 
자바스크립트 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가지며, length 프로퍼티를 갖는 특수한 객체이다

자바스크립트 배열의 요소는 사실 프로퍼티 값이다.

자바스크립트에서 사용할 수 잇는 모든 값은 객체의 프로퍼티 값이 될 수 있으므로 어떤 타입의 값이라도 배열의 요소가 될 수 있다
*/

// 27-10
const arr = [
  'string',
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  [],
  {},
  function () {},
];

console.log(arr);

// 일반적 배열과 자바스크립트 배열의 장단점
/* 
- 일반적인 배열의 장점: 인덱스로 요소에 빠르게 접근할 수 있다. 
- 일반적인 배열의 단점: 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않다
- 자바스크립트 배열의 장점: 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다
- 자바스크립트 배열의 단점: 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없다
*/

// 27-11 배열과 일반 객체의 성능 테스트
const arr2 = [];

console.time('Array Performance Test');

for (let i = 0; i < 10000000; i++) {
  arr[i] = i;
}

console.timeEnd('Array Performance Test');
// 288.048ms

const obj = {};

console.time('Object Performance Test');

for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}

console.timeEnd('Object Performance Test');
// 316.442ms
