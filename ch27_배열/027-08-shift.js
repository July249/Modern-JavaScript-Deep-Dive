// shift - 부수효과 있음
// shift 메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환
// 원본 배열이 빈 배열이면 undefined 반환
// shift 메서드는 원본 배열을 직접 변경

// 27-54
const arr1 = [1, 2];

let result = arr1.shift();
console.log(result); // 1
console.log(arr1); // [2]
