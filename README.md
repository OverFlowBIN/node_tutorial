###Node.js, 개발환경 구축

##Node.js 특징, 강점, 약점

#특징

- Node와 비동기성
  - JavaScript라는 언어 수준에서 Event Loop를 활용한 비동기 처리방식

강점

- Offloading
  - 저수준의 오래 걸리는 일은 Node 에게, 고수준의 로직은 메인 스레드에서 처리
- npm
  - 방대한 오픈 소스 생태계

약점

- 저수준 처리의 개선
  - 저수준 처리는 Node가 빠르게 처리하기 어려운 부분이다.
  - Node.js는 C와 WebAssembly 모듈을 바인딩해 사용하는 방법을 제공하고 있다.
  - C는 node-gyp를 통해, WebAssembly는 Node 12 버전부터 제공되고 있다.

package.json

- 해당 프로젝트가 npm이 관리하는 프로젝트인것을 알려줘야한다.
  - $ npm init -y
  - package.json 생성
  - script
    - 자주사용하는 단어를 간단하게 호출하도록 해준다.

Formatting, Linting

- vscode는 여러명이 사용하는 소스코드의 formmat을 일정하게 유지시켜주는 prettier(open source)등을 제공한다.

- prettier - 세미콜론, 따옴표 등을 자동적으로 표현해 준다. - vscode extention에서 ‘Prettier - Code formatter’를 설치한다. - $ npm install —save-dev prettier - package-lock.json 에서 정확한 패키지버전을 확인할 수 있다 => git에 package-lock도 올리면 좋다. - .prettierrc 파일을 생성하여 prettier를 셋팅할 수 있다.
  ￼ - .vscode 폴더를 만든 후 setting.json을 만든다 - 해당 프로젝트에서만 작동되는 vscode셋팅을 저장할 수 있다.
  ￼

- ESLint - 들여쓰기, 띄어쓰기 등등을 지정해준다. - vscode extention에서 ‘ESLint’를 설치한다.
- $ npm install —save-dev eslint
- .eslintrc.js 파일 만들기
- 하나하나 셋팅할 수 있지만 이미 좋은 plug-in이 많다 (airbnb style guide 등등..)
- $ npm install --save-dev eslint-config-airbnb-base eslint-plugin-import
- 혹시 잘못 설치가 되었다면 $ npm uninstall package_name 으로 삭제 가능하다.
- 혹시 이미 설정된 prettier와 eslint 의 충돌이 있다면 그냥 eslint-config-prettier를 설치해서 충돌을 방지 해준다
  ￼
  - ‘prettier’ 는 맨 마지막에 써야지 충돌이 방지 된다.
  - ESlint에는 console을 코드내에 사용하지 않는다라는 룰이있는데 한줄만 ESlint를 무시하고 싶다면
  - /_ eslint-disable-next-line _/ 다음과 같은 주석으로 한줄을 ESlint의 룰을 빠져나올 수 있다. - /_ eslint-disable-next-line no-console_/ 뒤에 특정 룰을 작성하면 해당 룰만 제외 시킬 수 있다.
  - node와 관련된 ESLint plug-in - npm install —save-dev eslint-plugin-node
    ￼

TypeScript로 타입 에러 체크하기

- 프로젝트에 TypeScript 설치
  - $ npm install —save-dev typescript
  - 체크하고 싶은 코드의 맨 윗줄에 // @ts-check 작성
- node 프로그래밍 환경에서 TypeScript에서도 동작하게 하는 방법
  - $ npm install —save-dev @types/node
- 잘못된 assign이나 틀린 철자 등을 찾아 준다.

jsconfig.json

- 프로젝트마다 요구하는 엄격함의 정도, 설정이 다르기 때문에 jsconfig.json에서 설정이 가능하다.
- 타입스크립트로 코드를 짜는건 아니지만 check만 하고 싶을때는 tsconfig.json이 아니라 jsconfig.json을 만들어 줘야 한다.
  ￼
- vscode에서 제공하는 레퍼런스를 확인 https://code.visualstudio.com/docs/languages/jsconfig

---

JavaScript 기초 이론

1.  JavaScript와 Event Loop

- Node를 잘 이해하기 위해서는 자바스크립트의 동시성 모델에 대해 잘 이해해야 합니다.
- 자바스크립트의 실행 모델은 event loop, call stack, callback queue 개념으로 이루어 진다.

Event Loop, Main Thread

- Event Loop란 자바스크립트 실행 모델이다.
- 이벤트 루프 모델은 여러 스레드를 사용한다.
- 그 중 우리가 작성한 자바스크립트는 코드가 실행되는 스레드를 메인 스레드라 부른다.
- 한 Node.js 프로세서에서 메인 스레드는 하나이며, 한 순간에 한 줄씩만 실행한다.
- 그러나 그 외의 일(file I/O, network…등등)을 하는 워크 스레드는 여럿이 있을 수 있다.

Call Stack

- 지금 시점까지 불린 함수들의 스택이다.
- 함수가 호출될 때 쌓이고, 리턴할 때 빠진다.
- Run-to-completion
  - 이벤트 루프가 다음 콜백을 처리하려면 지금 처리하고 있는 콜백의 실행이 완전히 끝나야 한다.
  - call stack이 완전히 빌 때까지 처리를 해야 다음 call back을 처리할 수 있다
- Callback Queue - call back들이 쌓이는 Queue - 콜백 큐(메세지 큐)는 앞으로 실행할 콜백(함수와 그 인자)들을 쌓아두는 큐입니다. - 콜백은 브라우저나 Node가 어떤 일이 발생하면(Event) 메인 스레드에게 이를 알려주기 위해(call back) 사용된다. - 이벤트는 파일 처리의 완료, 네트워크 작업의 완료, 타이머 호출 등이 있다.
  ￼
- Callback Queue 예시 1
- 실행 순서는?

console.log(‘1’)
setTimeout(() => {
console.log(‘2’)
}, 0)
console.log(‘3’)

- main 함수가 callstack에 들어감
- console.log(‘1’) 실행
- setTimeout 실행
  - 설정된 시간 이후 console.log(‘2’)를 callback queue에 집어 넣음
- console.log(‘3’) 실행
- callstack이 비어있다
- callback queue에있는 console.log(‘2’)를 stack에 가져와서 실행한다.
- 실행 순서 ‘1’, ‘3’, ‘2’

- Callback Queue 예시 2
- 5초동안 메세지는 몇번이나 출력되나?

setInterval(() => {
console.log(‘Hey!’)
while(true) {}
}, 1000)

- while loop가 도는 동안 stack이 비지 않기 때문에 1번만 출력된다.
- while loop가 도는 동안 call back 에서 콜백을 꺼낼 수가 없기 때문에, setInterval이 아무리 콜백을 쌓아도 메인 스레드에 실행할 수가 없다.
- 이런 경우를 event loop를 block 한다고 한다.

non-blocking I/O & offloading

// 여기서 Node에게 파일을 읽어달라고 요청하고, 워커 스레드에서 파일을 읽기 시작한다.
fs.readFile(fileName, (err, data) => {
// Node가 파일을 다 읽고 나면
// 1. callback queue에 이 함수에 err, data 인자를 채워 넣고
// 2. callback queue에서 꺼내질 때 이부분이 실행된다.
})

// readFile의 호출이 끝난 직후 바로 이 함수를 실행하게 된다.
// 이는 여전히 같은 콜백을 처리하는 중이기 때문이다.
someTask()

- 브라우저나 Node.js에서나, Web API 혹은 Node API의 동작이 끝나면 callback queue에 등록한다.
- 브라우저나 Node가 요청 받은 일을 하고 있는 동안 메인 스레드와 이벤트 루프는 영향을 받지 않고 계속 실행된다.
- 이를 offloading이라고 하며, Node 서버의 메인 스레드가 하나임에도 불구하고 빠르게 동작할 수 있는 이유이다.
- 메인 스레드가 오래 걸리는 일을 기다리지 않기 때문이다.

Event Loop 정리
￼

- callback queue에서 콜백을 꺼내고 (없다면 생길 때 까지 기다리고)
- 그 콜백의 처리가 끝날 때까지 실행하고
- 이를 반복한다.

2.  Scope, Hoisting

Hoisting

- 변수의 선언(만) 해당 스코프의 맨 위로 끌러올리는 것을 뜻한다
- 변수를 선언하는 var가 대표적인 예이다.

Fcuntion, lexical scope

- 코드가 어떤 식별자가 실제로 어떤 값이 가리키는지를 결정하는 것을 binding이라고 한다.
- 자바스크립트에서 binding은 lexical scope를 통해 이루어진다.
- lexical scope란 간단히 말하자면 안쪽에서 바깥쪽 변수에 접근할 수 있다는 뜻이다(반대는 X)
  - var는 block scoping의 대상이 아니다
  - let과 const는 block scoping이 된다.

3.  Closure

- closure = funtion + environment - closure는 function이 하나 생길 때마다 하나씩 생깁니다. - environment는 함수 자신을 둘러싼, 접근할 수 있는 모든 스코프를 뜻한다.
  ￼
  ￼
- saltAnd와 waterAnd 모두 함수는 같은 print이지만, 각각 주어진 변수가 다르다
- 즉, 둘은 서로 다른 closure를 형성하고 있다.

￼

- 결과값은 2가 나온다
  ￼
- 실행 결과는 2, 1이 된다.
  ￼
- 실행 결과는 2, 1, 2가 된다.
