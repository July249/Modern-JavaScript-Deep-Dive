// 6.10 동적 타이핑

// [동적 타입 언어와 정적 타입 언어]

/* 
자바스크립트의 모든 값은 데이터 타입을 가진다

그렇다면 변수는 데이터 타입을 기질까?

정적 타입 언어는 변수의 타입을 변경할 수 없으며 변수에 선언한 타입에 맞는 값만 할당할 수 있다

정적 타입 언어는 컴파일 시점에 타입 체크(선언한 데이터 타입에 맞는 값을 할당했는지 검사하는 처리)를 수행

이를 통해 타입의 일관성을 강제함으로써 더욱 안정적인 코드의 구현을 통해 런타임에 발생하는 에러를 줄인다

대표적인 정적 타입 언어로 C, C++, Java, 코틀린, 고, 하스켈, 러스트, 스칼라 등이 있다
*/

/* 
자바스크립트는 정적 타입 언어와 다르게 변수를 선언할 때 타입을 선언하지 않는다

다만 var, let, const 키워드를 이용해 선언할 뿐이다

자바스크립트의 변수는 정적 타입 언어와 같이 미리 선언한 데이터 타입의 값만 할당할 수 있는 것이 아니다

어떠한 데이터 타입의 값이라도 자유롭게 할당할 수 있다
*/

/* 
변수를 하나 선언하고 지금까지 살펴본 다양한 데이터 타입의 값을 할당한 다음, typeof 연산자로 변수의 데이터 타입을 조사해보자
*/

// 예제 06-23
var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = 'Hello';
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol();
console.log(typeof foo); // symbol

foo = {};
console.log(typeof foo); // object

foo = [];
console.log(typeof foo); // object

foo = function () {};
console.log(typeof foo); // function

/* 
typeof 연산자로 변수를 연산하면 변수에 할당된 값의 데이터 타입을 반환한다
*/

/* 
정적 타입 언어는 변수 선언 시점에 변수의 타입이 결정되고 변수의 타입을 변경할 수 없다

자바스크립트에서는 값을 할당하는 시점에 변수의 타입이 동적으로 결정되고 변수의 타입을 언제든 자유롭게 변경할 수 있다

"자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론)된다. 그리고 재할당에 의해 변수의 타입은 언제든 동적으로 변할 수 있다"
=> 동적 타이핑(dynamic typing)

대표적인 동적 타입 언어는 JavaScript, Python, PHP, 루비, 리스프, 펄 등
*/

/* 
처음의 질문으로 돌아가보자

변수는 타입을 가질까?

기본적으로 변수는 타입을 가지지 않는다

하지만 값은 타입을 가진다

따라서 "현재 변수에 할당되어 있는 값에 의해 변수의 타입이 동적으로 결정된다"고 표현하는 것이 더 적절하다

변수는 값에 묶여 있는 값에 대한 별명이기 때문이다
*/

// [동적 타입 언어와 변수]

/* 
동적 타입 언어는 변수에 어떤 데이터 타입의 값이라도 자유롭게 할당할 수 있다

이러한 동적 타입 언어의 특징은 데이터 타입에 대해 무감각해질 정도로 편리하다는 것이다

하지만 언제나 그렇듯 편리함의 이면에는 위험도 있다
*/

/* 
모든 소프트웨어 아키텍쳐에는 트레이드 오프(두 개의 정책이나 목표 중 하나를 달성하려고 하면 다른 목표의 달성이 늦어지거나 희생되는 모순적 관계를 의미)가 존재하며, 모든 앱에 적합한 것은 없듯이 동적 타입 언어 또한 구조적 단점이 있다

변수의 값이 언제든 변경될 수 있다
=> 타입도 언제든 변경될 수 있어 변수의 값을 확인하기 전까지는 타입을 확신할 수 없다
=> 개발자의 의도와 무관하게 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되어 에러가 발생하기도 하다
=> 즉, 유연성을 높지만 신뢰성은 떨어진다

위의 이유로 안정적인 프로그램을 만들기 위해 변수를 사용하기 이전에 데이터 타입을 체크해야 하는 경우가 있는데 이는 매우 번거로울 뿐더러 코드의 양도 증가한다

따라서 변수를 사용할 때 주의할 사항은 다음과 같다

1. 변수는 꼭 필요한 경우에 한하여 제한적으로 사용한다
- 변수 값은 재할당에 의해 언제든지 변경될 수 있다
- 이로 인해 동적 타입 언어인 자바스크립트는 타입을 잘못 예측하여 오류가 발생할 가능성이 높다
- 변수의 개수가 많으면 많을수록 오류가 발생할 확률도 높아진다
- 따라서 변수의 무분별한 남발은 금물이며, 필요한 만큼 최소한으로 유지하여야 한다

2. 변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다
- 변수의 유효 범위가 넓으면 넓을수록 변수로 인해 오류가 발생할 확률이 높아진다
- 변수의 유효 범위에 대해서는 13장 스코프에 대해 자세히 살펴보자

3. 전역 변수는 최대한 사용하지 않도록 한다
- 어디서든지 참조/변경 가능한 전역 변수는 의도치 않게 값이 변경될 가능성이 높고 다른 코드에 영향을 줄 가능성도 높다
- 따라서 전역 변수는 프로그램의 복잡성을 증가시키고 처리 흐름을 추적하기 어렵게 만들고, 오류가 발생할 경우 오류의 원인을 특정하기 어렵게 만든다
- 전역 변수의 사용을 억제하는 방법에 대해서는 14장 "전연변수의 문제점"에서 자세히 살펴보자

4. 변수보다는 상수를 사용해 값의 변경을 억제한다
- 상수를 사용하는 방법에 대해서는 15.3절 "const 키워드"에서 살펴보자

5. 변수 이름은 변수의 목적이나 의미를 파악할 수 있도록 네이밍 한다
- 변수 이름뿐 아니라 모든 식별자 (변수, 함수, 클래스 등)는 존재 이유를 파악할 수 있는 적절한 이름으로 지어야 한다
- 특히 식별자의 유효 범위가 넓을수록 명확한 이름을 명명하도록 노력하자
- 개발자의 의도를 나타내는 명확한 네이밍은 코드를 이해하기 쉽게 만들고, 이는 협업과 생산성 향상에 도움을 준다 
*/
