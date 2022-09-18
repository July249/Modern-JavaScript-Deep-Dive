// 6.6 null 타입

/* 
프로그래밍 언어에서 null은 변수에 값이 없다는 것을 의도적으로 명시 (의도적 부재)할 때 사용한다

변수에 null을 할당하는 이유? 
이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미
*/

// 예제 06-18
var foo = 'Lee';

// 이전 참조를 제거, foo 변수는 더 이상 'Lee'를 참조하지 않는다
// 유용해 보이지 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 좋다
foo = null;

/* 
함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 한다
*/

// 에제 06-19
/*
<!DOCTYPE html>
<html>
  <body>
    <script>
      var element = document.querySelector('.myClass');

      // HTML 문서에 myClass 클래스를 갖는 요소가 없다면 null을 반환한다
    </script>
  </body>
</html>
*/

/* 
HTML 요소를 검색해 반환하는 document.querySeletor 메서드는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우 에러 대신 null을 반환한다
*/
