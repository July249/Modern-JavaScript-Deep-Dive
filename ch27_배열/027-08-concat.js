// concat
// 매개변수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환
// 매개변수로 전달한 값이 배열인 경우 => 배열을 해체하여 새로운 배열의 요소로 추가
// 원본 배열은 변경되지 않음

// 27-57
const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환
// 매개변수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가
let result1 = arr1.concat(arr2);
console.log(result1); // [1, 2, 3, 4]

// 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환
result1 = arr1.concat(3);
console.log(result1); // [1, 2, 3]

// 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환
result1 = arr1.concat(arr2, 5);
console.log(result1); // [1, 2, 3, 4, 5]

// 원본 배열은 변경되지 않는다
console.log(arr1); // [1, 2]

/* 
push 메서드 vs. unshift 메서드 vs. concat 메서드

push와 unshift 메서드는 원본 배열을 직접 변경

concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환

따라서 push, unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해둬야 하는 반면, concat 메서드를 사용하는 경우 반환값을 반드시 변수에 할당 받아야 한다.
*/

// 27-58
const arr3 = [3, 4];

// unshift 메서드
arr3.unshift(1, 2);
console.log(arr3); // [1, 2, 3, 4]

// push 메서드
arr3.push(5, 6);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

const arr4 = [3, 4];
// arr3.unshift(1, 2); 를 대체
let result2 = [1, 2].concat(arr4);
console.log(result2); // [1, 2, 3, 4]

// arr3.push(5, 6); 를 대체
result2 = result2.concat(5, 6);
console.log(result2); // [1, 2, 3, 4, 5, 6]

/* 
매개변수로 전달 받은 값이 배열인 경우,

push와 unshift 메서드는 배열을 그대로 원본 배열의 마지막 또는 첫 번째 요소로 추가

concat 메서드는 매개변수로 전달 받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가
*/

// 27-59
const arr5 = [3, 4];

arr5.unshift([1, 2]);
arr5.push([5, 6]);
console.log(arr5); // [[1, 2], 3, 4, [5, 6]]

let result3 = [1, 2].concat([3, 4]);
result3 = result3.concat([5, 6]);

console.log(result3); // [1, 2, 3, 4, 5, 6]

// Note: concat 메서드는 스프레드 문법(...)으로 대체할 수 있다

// 27-60
let result4 = [1, 2].concat([3, 4]);
console.log(result4); // [1, 2, 3, 4]

result4 = [...[1, 2], ...[3, 4]];
console.log(result4); // [1, 2, 3, 4]

/* 
Conclusion

push / unshift 메서드와 concat 메서드를 사용하는 대신 스프레드 문법을 일관성 있게 사용하는 것을 권장한다.
*/
