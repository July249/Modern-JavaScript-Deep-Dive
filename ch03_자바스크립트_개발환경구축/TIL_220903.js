// 3장 자바스크립트 개발 환경과 실행 방법

// 3.1 자바스크립트 실행 환경
/* 
모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다.
브라우저 뿐만 아니라 Node.js도 자바스크립트 엔진을 내장하고 있다. 따라서 자바스크립트는 브라우저 환경 또는 Node.js 환경에서 실행할 수 있다. 기본적으로 브라우저에서 동작하는 코드는 Node.js 환경에서도 동일하게 동작한다.

그러나 브라우저와 Node.js는 용도가 다르다는 점을 유의하여야 한다. 브라우저는 HTML, CSS, 자바스크립트를 실행해 웹페이지를 브라우저 화면에 렌더링하는 것이 주된 목적이지만 Node.js는 브라우저 외부에서 자바스크립트 실행 환경을 제공하는 것이 주된 목적이다. 따라서 브라우저와 Node.js 모두 자바스크립트의 코어인 ECMAScript를 실행할 수 있지만 브라우저와 Node.js에서 ECMAScript 이외에 추가로 제공하는 기능은 호환되지 않는다

(예 1)
브라우저 - DOM API(HTML 요소를 선택하거나 조작하는 기능의 집합) 기본적으로 제공
Node.js - DOM API 미제공

(에 2)
Node.js - 파일 시스템 기본 제공 (파일 생성 및 수정)
브라우저 - 파일 시스템 미제공 (BUT! Web API인 FileReader 객체를 사용해 사용자가 지정한 파일을 읽어 들이는 것은 가능함)

NOTE 브라우저에서 파일 시스템을 제공하지 않는 이유
: 웹 어플리케이션의 자바스크립트는 사용자 컴퓨터의 브라우저에서 동작한다. 만약 브라우저를 통해 다운로드되어 실행되는 자바스크립트가 사용자 컴퓨터의 로컬 파일을 삭제하거나 수정하고 생성할 수 있다면 이는 사용자 컴퓨터가 악성 코드에 노출된 것과 마찬가지다. 따라서 보안사의 이유로 브라우저 환경의 자바스크립트는 파일 시스템을 제공하지 않는다

NOTE 브라우저에서 지원되는 것과 Node.js에서 지원되는 것
: 브라우저는 ECMAScript와 DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web Worker 같은 클라이언트 사이드 Web API를 지원한다.

Node.js는 클라이언트 사이드 Web API를 지원하지 않고 ECMAScript와 Node.js 고유의 API를 지원한다.

ECMAScript는 브라우저와 Node.js의 공통 지원사항이다 
*/

// 3.2 웹 브라우저
/* 
NOTE
: 이 강좌에서는 모든 과정은 가장 높은 웹 브라우저 점유율을 가지고 있으며 ECMAScript 사양을 준수하는 크롬 웹브라우저를 기준으로 진행한다.

3.2.1 개발자 도구
- 자주 사용하는 개발자 도구의 기능

  1. Elements
  : 로딩된 웹페이지의 DOM과 CSS를 편집해서 렌더링된 뷰를 확인해 볼 수 있다. 단, 편집한 내용이 저장되지는 않는다. 웹페이지가 의도된 대로 렌더링 되지 않았다면 이 패널을 확인해 유용한 힌트를 얻을 수 있다.

  2. Console
  : 로딩된 웹페이지의 에러를 확인하거나 자바스크립트 소스코드에 작성한 console.log 메서드의 실행 결과를 확인할 수 있다.

  3. Sources
  : 로딩된 웹페이지의 자바스크립트 코드를 디버깅할 수 있다

  4. Network
  : 로딩된 웹페이지와 관련된 네트워크 요청 정보와 성능을 확인할 수 있다

  5. Application
  : 웹 스토리지, 세션, 쿠키를 확인하고 관리할 수 있다

3.2.2 콘솔
- 개발자 도구의 console 패널은 자바스크립트 코드에서 에러가 발생해 애플리케이션이 정상적으로 동작하지 않을 때 가장 우선적으로 살펴봐야 할 곳이다
- 콘솔은 자바스크립트를 직접 입력해 그 결과를 확인할 수 있는 REPL(Read Eval Print Loop: 입력 수행 출력 반복) 환경으로 사용할 수도 있다

Tip
- 여러 줄로 이루어진 자바스크립트 코드를 실행할 때 줄바꿈이 필요한 경우: shift + enter

3.2.3 브라우저에서 자바스크립트 실행
- 브라우저는 HTML 파일을 로드하면 script 태그에 포함된 자바스크립트 코드를 실행한다
- 만일 자바스크립트 코드 내에서 console.log 메서드가 호출되었다면 콘솔에 실행 결과가 출력될 것이다

(예제 - example.html 파일을 확인하시오)

'+' 또는 '-' 버튼을 클릭하면 에러가 발생한다. 콘솔창을 통해 에러를 확인할 수 있다.

3.2.4 디버깅
- 디버깅을 할 수 있는 source 창을 이용할 수 있다
*/

// 3.3 Node.js
/* 
3.3.1 Node.js와 npm 소개

3.3.2 Node.js 설치

3.3.3 Node.js REPL(Read Eval Print Loop)
*/

// 3.4 VSC
/* 
3.4.1 Visual Studio Code 설치

3.4.2 내장 터미널

3.4.3 Code Runner 확장 플러그인

3.4.4 Live Server 확장 플러그인
*/

// Terminology
/* 
웹 크롤링

서버에서 웹사이트의 콘텐츠를 수집하기 위해 웹사이트에서 HTML 문서를 가져온 다음, 이를 가공해서 필요한 데이터만 추출하는 경우가 있다. 이를 웹 크롤링(Web Crawling)이라 한다. 서버 환경은 DOM API를 제공하지 않으므로 cheerio와 같은 DOM 라이브러리를 사용해 HTML 문서를 가공하기도 한다
*/
