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
