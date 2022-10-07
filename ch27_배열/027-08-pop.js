// pop - 부수효과 있음
// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환
// 원본 배열이 빈 배열이면 undefined를 반환
// pop 메서드는 원본 배열을 직접 변경

// 27-49
const arr1 = [1, 2];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환
let result = arr1.pop();
console.log(result); // 2

// pop 메서드는 원본 배열을 직접 변경
console.log(arr1); // [1]

// push와 pop 메서드를 이용한 stack 구현
/* 
스택(stack)은 데이터를 마지막에 밀어 넣고, 마지막에 넣은 데이터를 먼저 꺼내는 후입선출(LIFO - Last In, First Out : 마지막에 넣은 것이 가장 먼저 나옴)방식의 자료구조이다
스택에 데이터를 넣는 것을 push, 스택에서 데이터를 꺼내는 것을 pop이라고 한다
*/

// 27-50 - 스택을 생성자 함수로 구현하기 => 이해 안감
/* const Stack = (function () {
  
  // Stack 생성자 함수 생성
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      // 47장 에러 처리 참고
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  // Stack 생성자 함수의 메서드 생성
  Stack.prototype = {
    // 19.9.1 생성자 함수에 의한 프로토타입의 교체 참고
    constructor: Stack,
    // 스택의 가장 마지막에 데이터 넣기
    push(value) {
      return this.array.push(value);
    },
    // 스택의 가장 마지막 데이터 꺼내기
    pop() {
      return this.array.pop();
    },
    // 스택의 복사본 배열 반환
    entries() {
      return [...this.array];
    },
  };

  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entries()); // [1, 2]

stack.push(3);
console.log(stack.entries()); // [1, 2, 3]

stack.pop();
console.log(stack.entries()); // [1, 2] */

// 27-51 - 스택을 클래스로 구현하기
class Stack {
  #array; // private class number

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.#array = array;
  }

  // 스택의 가장 마지막에 데이터 넣기
  push(value) {
    return this.#array.push(value);
  }
  // 스택의 가장 마지막 데이터 꺼내기
  pop() {
    return this.#array.pop();
  }

  // 스택의 복사본 배열을 반환
  entries() {
    return [...this.#array];
  }
}

const stack = new Stack([1, 2]);
console.log(stack.entries()); // [1, 2]

stack.push(3);
console.log(stack.entries()); // [1, 2, 3]

stack.pop();
console.log(stack.entries()); // [1, 2]

console.log(stack); // Stack { array: [ 1, 2 ] } <= if "array" is not private
console.log(stack); // Stack {} <= if 'array' is private
