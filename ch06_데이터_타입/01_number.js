// 6.1 숫자 타입

/* 
숫자 타입 메모리 => 64비트 (8바이트)

부동소수점 형식으로 처리 => 모든 수를 실수로 처리, 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않음
*/

// 예제 06-01
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

/* 
정수, 실수, 2진수, 8진수, 16진수 리터럴은 모두 메모리에 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다

자바스크립트는 2진수, 8진수, 16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석된다
*/
// 예제 06-02
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

// 표기법만 다를 뿐 모두 같은 값이다
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true

/* 
자바스크립트의 숫자타입은 모든 수를 실수로 처리한다고 하였다

이는 정수로 표시된다고 해도 사실은 실수라는 것을 의미한다

따라서 정수로 표시되는 수까지 나누더라도 실수가 나올 수 있다
*/

// 예제 06-03
// 숫자 타입은 모두 실수로 처리된다
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

/* 
[특별한 숫자 타입의 값]

Infinity
-Infinity
NaN: 산술 연산 불가 (Not a Number)
*/

// 예제 06-04
// 숫자 타입의 세가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * 'String'); // NaN

/* 
자바스크립트는 대소문자를 구별(case-sensitive)하므로 작성시 주의를 요한다
*/
