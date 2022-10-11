// includes
// 배열 안에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환
// 첫 번째 매개변수 => 검색할 대상
// 두 번째 매개변수 => 검색을 시작할 인덱스 선택

// 27-83
const arr1 = [1, 2, 3];

arr1.includes(1, 1); // false
arr1.includes(3, -1); // true

// indexOf 메서드 vs. includes 메서드
/* 
배열에서 매개변수로 전달된 요소를 검색하여 인덱스를 반환하는 indexOf 메서드를 이용하여도 배열 내에 특정 요소가 포함되었는지 아닌지 확인 가능

하지만 indexOf 메서드를 사용하면 배열 내에 존재하지 않을 때, -1 이 반환된다

또한, 배열에 NaN이 포함되어 있는지 확인할 수 없다는 문제가 있다
*/

// 27-84 - NaN 인식 여부
[NaN].indexOf(NaN) !== -1; // false // NaN 찾지 못함
[NaN].includes(NaN); // true // NaN 찾음
