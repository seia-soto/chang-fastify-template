# 난... ㄱ ㅏ끔... 눈물을 흘린 ㄷ ㅏ ....

**절대 프로덕션 코드가 아닙니다. 단순히 정말 시연용이므로 제정신일 때 주의하여 사용하십시오.**

- 웹 서버 -> Fastify: https://fastify.io
- 데이터베이스 커넥터 -> Fastify-Oracle: https://npmjs.org/package/fastify-oracle
- 테스트 프레임워크 -> Tap: https://node-tap.org

## 명령어

### `yarn start`

서버를 직접 실행하는 명령어로 3000번 포트에서 실행되도록 설정되었습니다.

이후에 협의하여 따로 프로덕션용 코드를 설정하시길 바랍니다.

### `yarn test`

서버를 실행하지 않고 작동을 확인할 수 있도록 고안되었습니다.

`test` 폴더에서 테스트 코드를 찾으실 수 있습니다.

### `yarn lint`

ESLint 규칙으로 코드를 테스트합니다.

아래 명령어로 한 번에 고칠 수도 있습니다.

```
yarn lint --fix
```

## 구조

```md
- scripts: package.json에서 실행될 코드
  - start.js: 서버 시작
- src: 소스 코드
  - middlewares: Fastify Plugin 집합
  - models: 서비스 코드가 위치하는 영역
  - replies: 응답을 어떻게 할 지 미리 정형화하는 영역
  - router: API 라우터와 컨트롤러가 위치하는 영역 (api로 폴더명 변경 가능)
- test: 테스트 코드
```
