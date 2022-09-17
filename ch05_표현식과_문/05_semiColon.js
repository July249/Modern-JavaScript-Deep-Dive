// 5.5 세미콜론과 세미콜론 자동 삽입 기능
/* 
세미콜론(;)은 문의 종료를 나타낸다

따라서 문을 끝낼 때는 세미콜론을 붙여야 한다

단, 0개 이상의 문을 중괄호로 묶은 코드 블록 뒤에는 세미콜론을 붙이지 않는다
왜냐하면 코드블록 자체가 문의 종료를 의미하는 자체 종결성을 갖기 때문이다
*/

/* 
[ 세미콜론 자동 삽입 기능 (ASI) ]

세미콜론은 생략이 가능하다 

자바스크립트 엔진이 소스코드를 해석할 때 문의 끝이라고 예측되는 지점에 세미콜론을 자동으로 붙여주기 때문이다

하지만 간혹 ASI 동작이 개발자의 예측과 일치하지 않는 경우가 있다

아래의 사례를 보자
*/

// 예제 05-10
function foo() {
  return;
  {
  }
  // ASI의 동작 결과 => return; {};
  // 개발자의 예측 => return {};
}

console.log(foo()); // undefined

var bar = (function () {})(function () {})();
// ASI의 동작 결과 => var bar = function () {}(function() {})();
// 개발자의 예측 => var bar = function () {}; (function() {})();
// TypeError: (intermediate value)(...) is not a function
