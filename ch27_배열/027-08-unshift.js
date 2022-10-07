// unshift - 부수효과 있음
// unshift 메서드는 매개변수로 전달 받은 모든 값을 원본 배열의 맨 앞의 요소로 추가하고 변경된 length 프로퍼티값을 반환한다
// unshift 메서드는 원본 배열을 직접 변경한다

// 27-52
const arr1 = [1, 2];

let result = arr1.unshift(3, 4);
console.log(result); // 4

console.log(arr1); // [3, 4, 1, 2]

// 27-53 - 부수효과를 제거하기 위해 스프레드 용법 사용을 추천한다
// unshift 함수 호출 없이도 기존 배열의 맨 앞에 요소를 추가할 수 있다
const arr2 = [1, 2];

let unshiftedArr = [3, 4, ...arr2];
console.log(unshiftedArr); // [3, 4, 1, 2]
