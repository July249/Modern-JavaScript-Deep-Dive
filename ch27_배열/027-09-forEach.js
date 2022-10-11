// forEach
// for 문을 대체할 수 있는 고차함수
// forEach 메서드는 자신의 내부에서 반복문을 실행한다
// forEach 메서드는 반복문을 추상화한 고차함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야할 처리를 콜백함수로 전달받아 반복 호출한다

// 27-95 - for 문으로 작성한 예시
const numbers = [1, 2, 3];
const pows = [];

for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}
console.log(pows); // [1, 4, 9]

// 27-96
const numbers1 = [1, 2, 3];
const pows1 = [];

numbers1.forEach((num) => pows1.push(num ** 2));
console.log(pows1); // [1, 4, 9]

// forEach 메서드의 콜백함수
/* 
forEach 메서드를 호출한 배열의 요소값과 인덱스, forEach 메서드를 호출한 배열 자체, 즉, this를 순차적으로 전달받을 수 있다

forEach 메서드는 콜백함수를 호출할 때 3개의 인수 (forEach 메서드를 호출한 배열의 요소값과 인덱스, forEach 메서드를 호출한 배열(this))를 순차적으로 전달
*/

// 27-97
// forEach 메서드는 콜백함수를 호출하면서 3개 (요소값, 인덱스, this)의 인수를 전달한다
[1, 2, 3].forEach((item, idx, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${idx}, this: ${JSON.stringify(arr)}`);
});
/* 
요소값: 1, 인덱스: 0, this: [1, 2, 3]
요소값: 2, 인덱스: 1, this: [1, 2, 3]
요소값: 3, 인덱스: 2, this: [1, 2, 3]
*/

// JSON.stringfy 메서드
/* 
JSON.stringfy 메서드는 객체를 JSON 포맷의 문자열로 변환한다

위 예제에서는 객체인 arr 배열을 문자열로 출력하기 위해 사용되었다
*/

// 27-98
const numbers2 = [1, 2, 3];

numbers2.forEach((item, idx, arr) => {
  arr[idx] = item ** 2;
});

console.log(numbers); // [1, 4, 9]

/* 
Note: forEach 메서드의 반환값은 언제나 undefined이다
*/

// 27-99
const result = [1, 2, 3].forEach(console.log);
console.log(result); // undefined

// ???
/* 
forEach 메서드의 두 번째 인수로 forEach 메서드의 콜백함수 내부에서 this로 사용할 객체를 전달할 수 있다
*/
// 27-100
class Numbers {
  numberArray = [];

  multiply(arr) {
    arr.forEach(function (item) {
      // TypeError: Cannot read property 'numberArray' of undefined
      this.numberArray.push(item * item);
    });
  }
}

const numbers3 = new Numbers();
numbers3.multiply([1, 2, 3]);

// 27-101
class Numbers {
  numberArray = [];

  multiply(arr) {
    arr.forEach(function (item) {
      this.numberArray.push(item * item);
    }, this); // forEach 메서드의 콜백함수 내부에서 this로 사용할 객체를 전달
  }
}

const numbers4 = new Numbers();
numbers4.multiply([1, 2, 3]);
console.log(numbers4.numberArray); // [1, 4, 9]

// 27-102 - 화살표 함수를 이용한 방법
class Numbers {
  numberArray = [];

  multiply(arr) {
    arr.forEach((item) => this.numberArray.push(item * item));
  }
}

const numbers5 = new Numbers();
numbers5.multiply([1, 2, 3]);
console.log(numbers5.numberArray); // [1, 4, 9]

// 27-103 forEach 메서드의 폴리필
/* 
최신 사양의 기능을 지원하지 않는 브라우저를 위해 누락된 최신 사영의 기능을 구현하기 위해 추가하는 것을 풀리필(polyfill)이라고 한다
*/
// 만약 Array.prototype.forEach 메서드가 존재하지 않으면 폴리필을 추가한다
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    // 첫 번째 인수가 함수가 아니면, TypeError 발생
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function.');
    }

    // this로 사용할 두번째 인수를 전달받지 못하면 전역 객체를 this로 사용한다
    thisArg = thisArg || window;

    // for 문으로 배열을 순회하면서 콜백 함수를 호출
    for (var i = 0; i < this.length; i++) {
      // call 메서드를 통해 thisArg를 전달하면서 콜백함수를 호출
      // 이때 콜백 함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/*  
Note: forEach 메서드는 for 문과 달리 break, continue 문을 사용할 수 없다

다시 말해 배열의 모든 요소를 빠짐 없이 모두 순회하며 중간에 순회를 중단할 수 없다
*/

// 27-104
[1, 2, 3].forEach((item) => {
  console.log(item);
  // if (item > 1) break; // SyntaxError
});

[1, 2, 3].forEach((item) => {
  console.log(item);
  // if (item > 1) continue;
  // SyntaxError
});

/* 
희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외된다

이는 map, filter, reduce에서도 동일하다
*/
// 27-105 - 희소 배열에서의 forEach 메서드
// 희소 배열
const arr1 = [1, , 3];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]); // 1, undefined, 3
}

// forEach 메서드는 희소배열의 존재하지 않는 요소를 순회 대상에서 제외한다
arr1.forEach((v) => console.log(v)); // 1, 3

/* 
forEach 메서드는 for 문에 비해 성능이 좋지 않지만 가독성은 더 좋다

따라서 요소가 대단히 많은 배열을 순회하거나 시간이 많이 걸리는 복잡한 코드 또는 높은 성능이 필요한 경우가 아니라면 for 문 대신 forEach 메서드를 사용하는 것이 권장된다
*/
