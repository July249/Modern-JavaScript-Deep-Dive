// splice - 부수효과 있음
// 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 사용됨
// 제거한 요소들을 배열로 반환
// splice는 3개의 매개변수가 있다
// 직접 원본 배열을 변경한다

// splice 메서드 구조

// const arr = [1, 2, 3];
// arr.splice("start", "deleteCount", "items");
/* 
  "start": 원본 배열을 제거하기 시작할 인덱스 번호
          start 매개변수만 지정하면 원본 배열의 start부터 모든 요소를 제거한다
          start 매개변수가 음수인 경우 배열의 끝에서의 인덱스를 나타낸다
  
  "deleteCount": 원본 배열의 요솔르 제거하기 시작할 인덱스인 start부터 제거할 요소의 개수이다
                값이 0인 경우, 아무런 요소도 제거되지 않는다
  
  "items": 제거한 위치에 삽입될 요소들의 목록
          생략된 경우 원본 배열에서 요소들을 제거하기만 한다
*/

// 27-61
const arr1 = [1, 2, 3, 4];

const result1 = arr1.splice(1, 2, 20, 30);

console.log(result1); // [2, 3] // 제거한 요소가 배열로 반환됨

console.log(arr1); // [1, 20, 30, 4]
/* 
start = 1
deleteCount = 2
items = 20, 30

=> arr1 배열의 1번 인덱스에서 시작한다
=> 1번 인덱스, 2번 인덱스의 요소를 제거한다
=> arr1 = [1, 4]
=> arr1의 1번 인덱스부터 20, 30을 요소로 채운다
=> arr1 = [1, 20, 30, 4]
*/

// 27-62
const arr2 = [1, 2, 3, 4];

const result2 = arr2.splice(1, 0, 100);

console.log(arr2); // [1, 100, 2, 3, 4]
console.log(result2); // []

// 27-63
const arr3 = [1, 2, 3, 4];

const result3 = arr3.splice(1, 2);

console.log(arr3); // [1, 4]
console.log(result3); // [2, 3]

// 27-64
const arr4 = [1, 2, 3, 4];

const result4 = arr4.splice(1);

console.log(arr4); // [1]
console.log(result4); // [2, 3, 4]

// 27-65
// 배열에서 특정 요소를 제거하고 싶은 경우, indexOf 메서드를 이용하여 특정 요소의 인덱스를 얻은 다음 splice 메서드를 사용한다
const arr5 = [1, 2, 3, 1, 2];

function remove(array, item) {
  const idx = array.indexOf(item);

  if (idx !== -1) array.splice(idx, 1);

  return array;
}

// console.log(remove(arr5, 2)); // [1, 3, 1, 2]
console.log(remove(arr5, 10)); // [1, 2, 3, 1, 2]

// 27-66
// filter 메서드를 이용하여 특정 요소를 제거할 수도 있다
// 하지만 특정 요소가 중복된 경우 모두 제거된다
const arr6 = [1, 2, 3, 1, 2];

function removeAll(array, item) {
  return array.filter((v) => v !== item);
}

console.log(removeAll(arr6, 2)); // [1, 3, 1]
