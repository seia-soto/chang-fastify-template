/**
 * 응답 페이로드를 일관적으로 생성하는 코드 (테스트 코드에서 쉽게 쓰기 위해서 만듦)
 *
 * @param {string} code 응답 코드 (HTTP 응답 코드 아님)
 * @param {boolean} success 이 응답이 성공했는지 여부
 * @param {unknown} payload 추가 데이터
 * @returns 위 3개를 Object 반환
 */
const createReply = (code, success, payload) => {
  const reply = {
    code,
    success
  }

  if (typeof payload !== 'undefined') {
    reply.payload = payload
  }

  return reply
}

/**
 * 일관적인 응답 페이로드를 추가 데이터와 함께 반환하도록 재사용할 수 있는 함수
 *
 * @param {string} code 응답 코드 (HTTP 응답 코드 아님)
 * @param {boolean} success 이 응답이 성공했는지 여부
 * @returns payload를 함께 반환할 수 있는 콜백 생성
 */
const createReplyCallback = (code, success) => (payload) => createReply(code, success, payload)

module.exports = {
  createReply,
  createReplyCallback
}

/**
 * @문제 눈물의 주인은 누구인가?
 *
 * 1. 챙챙
 * 2. 논란
 * 3. 카니
 */
module.exports.teardownResult = createReplyCallback(
  'CHANG_BACKEND_TEARDOWN',
  true
)

module.exports.teardownError = createReplyCallback(
  'CHANG_BACKEND_ERROR',
  false
)

module.exports.sampleResult = createReplyCallback(
  'CHANG_BACKEND_SAMPLE',
  true
)
