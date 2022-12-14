// 5.6 표현식인 문과 표현식이 아닌 문

/* 
문에는 표현식인 문과 표현식이 아닌 문이 있다
그 구별 방법에 대해 배워보자
*/
// 예제 05-11
// 변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다
var x;
// 1, 2, 1 + 2, x = 1 + 2는 모두 표현식이다
// x = 1 + 2는 표현식이면서 완전한 문이기도 하다
x = 1 + 2;

/* 
[표현식과 문을 구별하는 방법]

표현식인 문과 표현식이 아닌 문을 구별하는 가장 간단하고 명료한 방법은 변수에 할당하여 보는 것이다
*/

// 예제 05-12
// 표현식이 아닌 문은 값처럼 사용할 수 없다
// var foo = var x; // SyntaxError: Unexpected token var

/* 
위 예제의 변수 선언문은 표현식이 아닌 문이다
다시 말해 값으로 평가될 수 없다
따라서 변수 선언문은 값처럼 사용할 수 없다
*/

// 예제 05-13
// 변수 선언문은 표현식이 아닌 문이다
var x;

// 할당문은 그 자체가 표현식이지만 완전한 문이기도 하다
// 즉, 할당문은 표현식인 문이다
x = 100;

/* 
위의 x = 100은 그 자체가 표현식이다

즉, 할당문은 표현식인 문이기 때문에 값처럼 사용할 수 있다
 */

// 예제 05-14
// 표현식인 문은 값처럼 사용할 수 있다
var foo = (x = 100);
console.log(foo); // 100

/* 
할당문을 값처럼 변수에 할당했다

표현식인 문은 할당문은 할당한 값으로 평가된다

따라서 foo 변수에는 100이 할당된다 (foo와 x를 동치로 보기 때문이다)
*/

/* 
**중요!! 완료 값 (Completion Value) **
표현식이 아닌 문을 실행하면 언제나 undefined를 출력한다

이를 완료 값이라고 한다

완료값은 표현식의 평가 결과가 아니다

따라서 다른 값과 같이 변수에 할당할 수 없고 참조할 수도 없다
*/
