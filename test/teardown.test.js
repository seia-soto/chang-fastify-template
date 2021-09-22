/**
 * @author 챙챙
 * @writer 논란
 * @review 챙챙 평가원
 * @궁예 챙챙
 * @수강생 논란
 * @풀이 카니
 *
 * @문제 화자는 언제 신체 검사를 했을까?
 *
 * 1. 서버가 "닥쳐"라고 말했을 때...
 * 2. 눈물을 흘리기 전에...
 * 3. 눈물을 흘린 다음...
 * 4. 테스트가 실행되었을 때...!
 */
const { test, before, teardown } = require('tap')
const { createInstance } = require('../src')
const replies = require('../src/replies')
const sample = require('../src/models/sample')

let server // 서버 인스턴스

// 테스트를 시작하기 전에 서버 인스턴스 생성!
// 이렇게 하면 따로 서버를 열지 않고 테스트 가능
before(async () => {
  server = createInstance({
    logger: {
      level: 'info' // 로거 생성
    }
  })
})

// 테스트 종료하기 전에 데이터베이스 연결 종료해야 안전하게 종료됨
/*

난... ㄱ ㅏ끔... 눈물을 흘린 ㄷ ㅏ ....

*/
teardown(async () => {
  /**
   * 감동 쉴화 스토리
   */
  await server.close() // "백엔드 접어!" Server said in async mode. 그리고 난 그것을 await으로 기다려주었다.
})

// 그리고 신체 검사하기 시작했다.
test('제대로 우는지 확인 (GET)', async t => {
  const res = await server.inject({
    method: 'GET',
    url: '/api/teardown'
  })

  // 단순히 값 비교 (===)할 때는 equal
  t.equal(res.statusCode, 200, '응답 코드 200을 반환해야 함')
  // Object와 같은 객체를 딥하게 비교할 때는 same, replies에서 모든 응답 포맷을 관리해서 쉽게 테스트!
  t.same(res.json(), replies.teardownResult('난... ㄱ ㅏ끔... 눈물을 흘린 ㄷ ㅏ ....'), '응답 페이로드가 제대로 응답되었는지 확인')
  // 'true'로 평가되는 값들을 비교할 때에는 ok
  t.ok(res.json().payload, '응답에 payload라는 프로퍼티가 있는지 확인')
})

test('제대로 우는지 확인 (POST)', async t => {
  const res = await server.inject({
    method: 'POST',
    url: '/api/teardown'
  })

  t.equal(res.statusCode, 200, '응답 코드 200을 반환해야 함')
  t.same(res.json(), replies.teardownResult('챙챙쓰'), '응답 페이로드가 제대로 응답되었는지 확인')
})

test('미들웨어 응답 테스트 (Reject 헤더)', async t => {
  const res = await server.inject({
    method: 'POST',
    url: '/api/teardown',
    headers: {
      reject: '1' // 더미 데이터
    }
  })

  t.equal(res.statusCode, 200, '응답 코드 403을 반환해야 함') // 일부러 틀린 테스트
  t.same(res.json(), replies.teardownError(), '에러 페이로드를 반환해야 함')
})

test('샘플 데이터 확인', async t => {
  const res = await server.inject({
    method: 'GET',
    url: '/api/sample'
  })

  t.equal(res.statusCode, 200, '응답 코드 200을 반환해야 함')
  t.same(res.json(), replies.sampleResult({ name: await sample.getName(), age: await sample.getAge() }), '이름과 1살을 추가로 반환해야 함')
})
