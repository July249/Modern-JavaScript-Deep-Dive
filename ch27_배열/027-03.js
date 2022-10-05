// length 프로퍼티와 희소 배열

// 27-12
console.log([].length); // 0
console.log([1, 2, 3].length); // 3

// 27-13 length 프로퍼티의 값은 배열의 요소가 변경되면 갱신된다.
const arr1 = [1, 2, 3];
console.log(arr1.length); // 3

// 요소 추가
arr1.push(4);
// 요소를 추가하면 length 프로퍼티 값이 자동 갱신된다
console.log(arr1.length); // 4

// 요소 삭제
arr1.pop();
// 요소를 삭제하면 length 프로퍼티의 값이 자동 갱신된다
console.log(arr1.length);

// length 프로퍼티 값은 요소의 개수, 즉, 배열의 길이를 통해 결정된다
// legnth 프로퍼티는 임의의 숫자값을 명시적으로 할당받을 수도 있다

// 27-14 length 프로퍼티 값보다 작은 값을 할당하는 경우
const arr2 = [1, 2, 3, 4, 5];

// 현재 length 프로퍼티 값인 5보다 작은 숫자 3을 length 프로퍼티에 할당
arr2.length = 3;

// 배열의 길이가 5에서 3으로 줄어든다
console.log(arr2); // [1, 2, 3]

// 27-15 length 프로퍼티 값보다 큰 값을 할당하는 경우
const arr3 = [1];

arr3.length = 3;

console.log(arr3); // [1, <2 empty items>]
console.log(arr3.length); // 3
console.log(arr3[0], arr3[1], arr3[2]); // 1 undefined undefined

// 27-16
console.log(Object.getOwnPropertyDescriptors(arr3));
/* 
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

/* 
배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 배열을 희소배열이라고 한다

위 예제 27-16은 배열의 뒷부분만 비어 있어서 요소가 연속적으로 위치하는 것처럼 보일 수 있으나 중간이나 앞부분이 비어 있을 수도 있다
*/

// 27-17
// 희소 배열
const sparse = [, 2, , 4];

console.log(sparse.length); // 4
console.log(sparse); // [ <1 empty item>, 2, <1 empty item>, 4 ]

console.log(Object.getOwnPropertyDescriptors(sparse));
/* 
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/

/* 
희소 배열은 length와 배열 요소의 개수가 일치하지 않는다

희소 배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다

의도적으로 희소 배열을 생성하지 말고, 배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 성능에 좋은 방향이다
*/
