// 6.2 문자열 타입

/* 
문자열 타입은 텍스트 데이터를 나타내기 위해 사용된다

문자열은 0개 이상의 16비트 유니코드 문자(UTF-16)의 집합으로 전 세계 대부분의 문자를 표현할 수 있다

문자열은 작은따옴표(''), 큰따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다

자바스크립트에서 가장 일반적인 표기법은 작은 따옴표를 사용하는 것이다
*/

// 예제 06-06
// 문자열 타입
var string;
string = '문자열'; // 작은 따옴표
string = '문자열'; // 큰 따옴표
string = `문자열`; // 백틱(ES6)
string = '작은 따옴표롤 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식된다.';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식된다.";

/* 
문자열을 따옴표로 감싸는 이유 => 키워드나 식별자 같은 토큰과의 구별을 위하여

문자열을 따옴표로 감싸지 않으면 키워드나 식별자와 같은 토큰으로 인식한다
*/

// 예제 06-07
// 따옴표로 감싸지 않은 hello를 식별자로 인식한다
var string = hello; // ReferenceError: hello is not defined

/* 
C 또는 자바와 달리 자바스크립트의 문자열은 원시타입이다

또 변경 불가능한 값 (immutable value) 이다

이는 문자열이 생성되면 그 문자열을 변경할 수 없다는 것을 의미한다
*/
