// 원시값
// 11-01
// const 키워드를 사용해 선언한 변수는 재할당이 금지된다
const o = {};

// 변수에 할당한 원시 값(상수)은 변경할 수 없다
// 하지만, 변수에 할당한 객체는 변경할 수 있다
o.a = 1;
console.log(o); // {a: 1}

// 11-02
// 문자열은 0개 이상의 문자로 이루어진 집합이다
var str1 = '';
var str2 = 'Hello';

// 11-03
var str = 'Hello';
str = 'world';

// 유사 배열 객체
// 11-04
var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다
console.log(str[0]);

// 원시값인 문자열이 객체처럼 동작한다
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING
