// shift - 부수효과 있음
// shift 메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환
// 원본 배열이 빈 배열이면 undefined 반환
// shift 메서드는 원본 배열을 직접 변경

// 27-54
const arr1 = [1, 2];

let result = arr1.shift();
console.log(result); // 1
console.log(arr1); // [2]

/* 
큐(Queue) 구현

1. Queue란?
FIFO (First In First Out) 방식의 자료 구조이다
*/
// 생성자 함수로 Queue 구현
// 27-55
/*
const Queue = (function () {
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      // 47장 에러처리 참고
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  Queue.prototype = {
    // 19.9.1절 생성자함수에 의한 프로토타입의 교체 참고
    constructor: Queue,
    // 큐의 가장 마지막에 데이터를 밀어 넣는다
    enqueue(value) {
      return this.array.push(value);
    },
    // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이터를 꺼낸다
    dequeue() {
      return this.array.shift();
    },
    // 큐의 복사본 배열을 반환한다.
    entries() {
      return [...this.array];
    }
  };

  return Queue;
}());

const queue = new Queue([1, 2]);
console.log(queue.entries()); // [1, 2]

queue.enqueue(3);
console.log(queue.entries()); // [1, 2, 3]

queue.dequeue();
console.log(queue.entries()); // [2, 3]
*/

// 클래스로 Queue 구현
// 27-56
class Queue {
  #array; // private class member
  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  // 큐의 가장 마지막에 데이터를 넣는다
  enqueue(value) {
    return this.#array.push(value);
  }

  // 큐의 가장 앞에 있는 데이터를 꺼낸다.
  dequeue() {
    return this.#array.shift();
  }

  // 큐의 복사본 배열을 반환한다
  entries() {
    return [...this.array];
  }
}

const queue = new Queue([1, 2]);

console.log(queue.entries()); // [1, 2]

queue.enqueue(3);
console.log(queue.entries()); // [1, 2, 3]

queue.dequeue();
console.log(queue.entries()); // [2, 3]
