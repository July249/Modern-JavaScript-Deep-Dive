// fill - 부수효과 있음
// 매개변수로 전달 받은 값을 배열의 처음부터 끝까지 요소로 채운다
// 원본 배열이 변경된다

// 27-77
const arr1 = [1, 2, 3];

arr1.fill(0);
console.log(arr1); // [0, 0, 0]

// 27-78 - 채우기 시작할 인덱스를 지정
const arr2 = [1, 2, 3];

arr2.fill(0, 1);
console.log(arr2); // [1, 0, 0]

// 27-79 - 요소 채우기를 멈출 인덱스를 지정
const arr3 = [1, 2, 3, 4, 5];

arr3.fill(0, 1, 3);
console.log(arr3); // [1, 0, 0, 4, 5];

// 27-80 - 특정 값으로 채워진 배열 생성
const arr4 = new Array(3);
console.log(arr4); // [ < 3 empty items> ]

const result4 = arr4.fill(1);
console.log(arr4); // [1, 1, 1] // 원본 배열을 직접 변경
console.log(result4); // [1, 1, 1] // 변경된 원본 배열을 반환

/* 
fill 메서드 사용시 모든 요소를 하나의 값으로만 채울 수 밖에 없다

Array.from 메서드를 사용하면 두번째 매개변수로 전달한 콜백함수를 통해 요소값을 만들면서 배열을 채울 수 있다

Array.from 메서드는 두 번째 매개변수로 전달할 콜백함수에 첫 번째 매개변수에 의해 생서오딘 배열의 요소값과 인덱스를 순차적으로 전달하면서 호출하고, 콜백함수의 반환값으로 구성된 배열을 반환
*/

// 27-81 ???
// 매개변수로 전달받은 정수만큼 요소를 생성하고 0부터 1씩 증가시키면서 요소를 채운다
const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
// const sequences = (length = 0) => Array.from(length), (_, i) => i);

console.log(sequences(3)); // [0, 1, 2]
