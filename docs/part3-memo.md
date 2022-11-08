# Part3 메모

## 타입스크립트 프로젝트 시작하는 방법

NodeJs로 typescript 라이브러리를 설치해서 `tsc` 컴파일러를 사용할 수 있게 한다.

```bash
npm i typescript --location=global
```

## 타입스크립트 설정 파일

웹팩 핸드북 보기 - [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)

[Typescript 공식 tsconfig](https://www.typescriptlang.org/tsconfig)

웹팩 핸드북 보는 중

### 웹팩

프론트엔드 프레임워크에서 가장 많이 사용하는 모듈 번들러에요.

웹 애플리케이션을 구성하는 자원(HTML, CSS, Javascript, Images 등)을 각각 모듈로 보고 이들을 조합해서 한 결과물로 만드는 도구에요.

웹팩이 나타난 이유는 3가지에요.

1. 파일 단위 자바스크립트 모듈관리 필요
2. 웹 개발 작업 자동화 도구
3. 웹 애플리케이션의 빠른 로딩 속도와 높은 성능

`package.json` 파일에서는 NodeJs 프로젝트 관리 설정을 할 수 있다.

`webpack.config.js` 파일에서는 웹팩 빌드 설정을 하여 `package.json` 에서 웹필 빌드를 간단하게 수행하도록 돕는다.

웹팩 기초 따라하기

`test-javascript` 폴더에서 따라함

### 웹팩 속성 설명

`entry`

웹팩 빌드할 소스 파일을 지정하는 속성

`output`

빌드 산출물 파일명과 경로들을 지정하는 속성

산출물 이름값에 웹팩 내부에서 사용하는 변수를 참조할 수 있다.

이렇게 변수값이 빌드할 때마다 다르면 `index.html` 등에서 어떻게 가져올지 궁금하다.

`loader`

자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images)을 변환하도록 돕는 속성

특정 파일 패턴에 여러 가지 로더를 지정할 때 빌드에서 로더를 선택하는 순서는 특이하게 오른쪽에서 왼쪽 순으로 적용된다. 빌드를 준비할 때 배열 요소가 스택에 쌓이고 Pop하면서 로더를 적용한다고 생각하자.

```json
module: {
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader']
    }
  ]
}
```

