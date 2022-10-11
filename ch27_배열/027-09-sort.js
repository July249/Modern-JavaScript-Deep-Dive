// sort
// 배열의 요소를 정렬
// 원본 배열을 직접 변경하며 정렬된 배열을 반환
// 기본적으로 오름차순으로 정렬됨

// 27-87 - 오름차순(ascending) 정렬
const fruits1 = ['banna', 'orange', 'apple'];

fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']

// 한글 문자열 요소도 오름차순으로 정렬
const 과일들1 = ['바나나', '오렌지', '사과'];

// 오름차순(ascending) 정렬
과일들.sort();
console.log(과일들); // ['바나나', '사과', '오렌지']

// 27-89 - 내림차순(descending) 정렬
const fruits2 = ['banana', 'orange', 'apple'];

fruits2.sort();
console.log(fruits2); // ['apple', 'banana', 'orange']

fruits2.reverse();
console.log(fruits2); // ['orange', 'banana', 'apple']

// 27-90 - 숫자 요소 배열의 정렬
const points1 = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log(points1); // [1, 10, 100, 2, 25, 40, 5]
// sort 메서드의 기본 정렬 순서는 유니코드 코드 포인트이다
// sort 메서드는 배열의 요소를 일시적으로 문자열로 변환한 후에 정렬을 한다

// 27-91
['2', '1'].sort(); // ['1', '2']
[2, 1].sort(); // [1, 2]

// 27-92
['2', '10'].sort(); // ['10', '2']
[2, 10].sort(); // [10, 2]

// 27-93 - 숫자 요소 배열의 정렬
/* 
숫자 요소를 정렬할 때 sort 메서드에 정렬 순서를 정의하는 비교 함수를 매개변수로 전달해야한다

비교함수의 반환값이 0보다 작으면 비교함수의 첫 번째 인자를 우선 정렬

비교함수의 반환값이 0보다 크면 비교함수의 두 번째 인자를 우선 정렬
*/
const points2 = [40, 100, 1, 5, 2, 25, 10];

// 오름 차순 정렬
points2.sort((a, b) => a - b);
console.log(points2); // [1, 2, 5, 10, 25, 40, 100]

// 최소 / 최대값 취득
console.log(points2[0], points2[points2.length - 1]); // 1 100

// 내림 차순 정렬
points2.sort((a, b) => b - a);
console.log(points2); // [100, 40, 25, 10, 5, 2, 1]

// 최소 / 최대값 취득
console.log(points2[points2.length - 1], points2[0]); // 1 100

// 27-94 - 객체를 요소로 갖는 배열을 정렬
const todos = [
  { id: 4, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' },
];

// 비교함수, 매개변수 key는 프로퍼티 키이다
function compare(key) {
  // 프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용
  // 비교 함수는 양수 / 음수 / 0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

// id를 기준으로 오름차순 정렬
todos.sort(compare('id'));
console.log(todos);
/* [
    {id: 1, content: "HTML"},
    {id: 2, content: "CSS"},
    {id: 4, content: "JavaScript"},
  ]
*/

// content를 기준으로 오름차순 정렬
todos.sort(compare('content'));
console.log(todos);
/* 
  [
    {id: 2, content: "CSS"},
    {id: 1, content: "HTML"},
    {id: 4, content: "JavaScript"},
  ]
*/

// sort 메서드의 정렬 알고리즘
/* 
sort 메서드는 quicksort 알고리즘을 사용했었으나, quicksort 알고리즘은 동일한 값의 요소가 중복되었을 때 초기 순서와 변경될 수 있는 불안정한 정렬 알고리즘으로 알려져 있다

ES6에서는 timsort 알고리즘을 사용하도록 바뀌었다
*/
