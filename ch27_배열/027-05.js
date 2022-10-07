// 배열 요소의 참조
// 27-13 요소의 참조
const arr1 = [1, 2];

console.log(arr1[0]); // 1
console.log(arr1[1]); // 2

// 27-32 존재하지 않는 요소에 접근하면 undefined가 반환
console.log(arr1[2]); // undefined

/* 
배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 갖는 객체이다

따라서 존재하지 않는 프로퍼티 키로 객체의 프로퍼티에 접근했을 때 undefined를 반환하는 것처럼 배열도 존재하지 않는 요소를 참조하면 undefined를 반환

동일한 이유로 희소 배열의 존재하지 않는 요소를 참조해도 undefined가 반환된다
*/
// 27-33
const arr2 = [1, , 3];
console.log(Object.getOwnPropertyDescriptors(arr2));
/* 
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

console.log(arr2[1]); // undefined
console.log(arr2[3]); // undefined

const obj = {
  a: 1,
  b: 2,
};

console.log(obj.a); // 1
console.log(obj.b); // 2
console.log(obj.c); // undefined
