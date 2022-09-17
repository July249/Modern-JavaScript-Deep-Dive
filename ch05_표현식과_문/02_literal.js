// 5.2 리터럴 (literal)

/* 
리터럴(literal)은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법(notation)을 말한다
*/

// 예제 05-03
// 숫자 리터럴 3
3;

/* 
위 예제의 3은 단순한 아라비아 숫자가 아니라 숫자 리터럴이다

사람이 이해할 수 있는 아라비아 숫자를 사용해 숫자 리터럴 3을 코드에 기술하면 자바스크립트 엔진은 이를 평가하여 숫자값 3을 생성한다

즉, 리터럴은 평가되어 값을 생성한다

이처럼 리터럴은 사람이 이해할 수 있는 문자 (아라비아 숫자, 알파벳, 한글 등) 또는 미리 약속된 기호('', "", [], {}, //, . 등)로 표기한 코드다

자바스크립트 엔진은 코드가 실행되는 시점인 런타임에 리터럴을 평가해 값을 생성한다

즉, 리터럴 값을 생성하기 위해 미리 약속한 표기법이라고 할 수 있다

리터럴을 사용하면 다음과 같이 다양한 종류(data type)의 값을 생성할 수 있다
*/

/* 
정수 리터럴      
(ex. 100)
부동소수점 리터럴     
(ex. 10.5)
2진수 리터럴
(ex. 0b01000001) -> 0b로 시작      
8진수 리터럴
(ex. 0o101) -> ES6에서 도입됨, 0o로 시작
16진수 리터럴
(ex. 0x41) -> ES6에서 도입됨, 0x로 시작
문자열 리터럴
(ex. 'Hello' "World")
불리언 리터럴
(ex. true false)
null 리터럴
(ex. null)
undefined 리터럴
(ex. undefined)
객체 리터럴
(ex. { name: 'Lee', address: 'Seoul' })
배열 리터럴
(ex. [1, 2, 3])
함수 리터럴
(ex. function() {})
정규 표현식 리터럴
(ex. /[A-Z]+/g)
*/
