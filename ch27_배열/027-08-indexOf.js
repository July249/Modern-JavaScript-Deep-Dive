// indexOf
// 원본 배열에서 매개변수로 전달된 요소를 검색하여 인덱스를 반환
/* 
1. 원본 배열에 매개변수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환
2. 원본 배열에 매개변수로 전달한 요소가 존재하지 않으면 -1을 반환
*/

// 27-43
const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환
console.log(arr.indexOf(2)); // 1
// 배열 arr에 요소 4가 없으므로 -1을 반환
console.log(arr.indexOf(4)); // -1
// 두번째 매개변수는 검색을 시작할 때 인덱스
// 두번째 매개변수를 생략하면 처음부터 검색
console.log(arr.indexOf(2, 2)); // 2

// 27-44 배열에 특정 요소가 존재하는지 확인
const foods = ['apple', 'banana', 'orange'];

// foods 배열에 'orange'요소가 있는지 검색
if (foods.indexOf('orange') === -1) {
  // foods 배열에 'orange'요소가 존재하지 않으면 'orange'요소를 추가
  foods.push('orange');
}

console.log(foods); // [ 'apple', 'banana', 'orange' ]

// 27-45 - indexOf 보다 Array.prototype.includes 메서드를 사용하면 가독성 상승
const fruit = ['apple', 'banana', 'orange'];

// fruit 배열에 'orange' 요소가 존재하는지 확인한다
if (!fruit.includes('orange')) {
  // fruit 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다
  fruit.push('orange');
}

console.log(fruit); // [ 'apple', 'banana', 'orange' ]
