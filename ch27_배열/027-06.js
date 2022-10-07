// 배열 요소의 추가와 갱신

// 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가된다
// 이 때 length 프로퍼티 값은 자동 갱신된다

// 27-34
const arr1 = [0];
// 배열의 요소 추가
arr1[1] = 1;
console.log(arr1); // [0, 1]
console.log(arr1.length); // 2

// 현 배열의 length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 희소배열이 된다
// 27-35
arr1[100] = 100;

console.log(arr1); // [ 0, 1, <98 empty items>, 100 ]
console.log(arr1.length); // 101

// 27-36
// 명시적으로 값을 할당하지 않은 요소는 생성되지 않는다
console.log(Object.getOwnPropertyDescriptors(arr1));
/* 
{
  '0': { value: 0, writable: true, enumerable: true, configurable: true },
  '1': { value: 1, writable: true, enumerable: true, configurable: true },
  '100': { value: 100, writable: true, enumerable: true, configurable: true },
  length: {
    value: 101,
    writable: true,
    enumerable: false,
    configurable: false
  }
}
*/

// 27-37 - 요소값의 갱신
console.log(arr1); // [ 0, 1, <98 empty items>, 100 ]
arr1[1] = 10;
console.log(arr1); // [ 0, 10, <98 empty items>, 100 ]

// 정수 이외의 값을 인덱스처럼 사용하면 배열의 요소가 생성되는 것이 아니라 프로퍼티가 생성된다
// 이때 추가된 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는다

// 27-38
const arr2 = [];

// 배열 요소의 추가
arr2[0] = 1;
arr2['1'] = 2;

// 프로퍼티 추가
arr2['foo'] = 3;
arr2.bar = 4;
arr2[1.1] = 5;
arr2[-1] = 6;

console.log(arr2); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]

// 프로퍼티는 length에 영향을 주지 않는다
console.log(arr2.length); // 2
