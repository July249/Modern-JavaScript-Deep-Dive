// map
// map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출한다
// 그리고 콜백함수의 반환값들로 구성된 새로운 배열을 반환한다
// 원본 배열은 변경되지 않는다

// 27-106
const numbers1 = [1, 4, 9];

const roots1 = numbers1.map((item) => Math.sqrt(item));

console.log(roots1); // [1, 2, 3]
console.log(numbers1); // [1, 4, 9] // 원본 배열을 변경되지 않았다

/* 
map 메서드가 생성하여 반환하는 새로운 배열의 length 프로퍼티 값은 map 메서드를 호출한 배열의 length 프로퍼티 값과 반드시 일치

1:1 함수관계
*/
// 27-107
// map 메서드는 콜백 함수를 호출하면서, 3개 (요소값, 인덱스, this)의 인수를 전달한다
[1, 2, 3].map((item, idx, arr) => {
  console.log(`요소값:${item} 인덱스:${idx} this:${JSON.stringify(arr)}`);
  return item;
});
/* 
요소값: 1, 인덱스: 0, this: [1, 2, 3]
요소값: 2, 인덱스: 1, this: [1, 2, 3]
요소값: 3, 인덱스: 2, this: [1, 2, 3]
*/

// map 메서드의 두 번째 인수로 map 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다
// ???
// 27-108
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map(function (item) {
      // 외부에서 this를 전달하지 않으면 this는 undefined를 가리킨다
      return this.prefix + item;
    }, this); // map 메서드의 콜백함수 내부에서 this로 사용할 객체를 전달
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
// ['-webkit-transition', '-webkit-user-select']

// ???
// 27-109
// 화살표 함수는 함수 자체의 this 바인딩을 가지 않는다
// 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프, 즉 add 메서드 내부의 this를 그대로 참조한다
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this는 그대로 참조한다
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer2 = new Prefixer('-webkit-');
console.log(prefixer2.add(['transition', 'user-select']));
// ['-webkit-transition', '-webkit-user-select']
