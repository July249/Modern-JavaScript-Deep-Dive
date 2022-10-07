// 배열 메서드

/* 
Array 생성자 함수는 정적 메서드를 제공

Array.prototype은 프로토타입 메서드를 제공
*/

/* 
배열 메서드는 결과물을 반환하는 패턴이 2가지로 나뉜다

1. 원본 배열(배열 메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메서드

2. 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드
*/

// 27-41
const arr = [1];

// push 메서드는 원본 배열을 직접 변경한다
arr.push(2);
console.log(arr); // [1, 2]

// concat 메서드는 원본 배열 (arr)을 직접 변경하지 않고 새로운 배열을 생성하여 반환
const result = arr.concat(3);
console.log(arr); // [1, 2]
console.log(result); // [1, 2, 3]
