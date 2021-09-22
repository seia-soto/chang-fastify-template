const replies = require('../replies')

/**
 * Fastify식 Middleware, 명칭은 Hook (Fastify Docs에서)
 */
module.exports = async (request, reply) => {
  const isRejectable = request.headers.reject // reject 헤더 검사

  if (typeof isRejectable !== 'undefined') {
    // 미들웨어에서 응답을 하고 싶으면 send 함수 호출 후 return reply하는게 공식 문서 상 베스트 프렉티스
    reply.code(403)
    reply.send(replies.teardownError())
    return reply
  }

  request.chang = '챙챙쓰' // request 꾸미기 (프로퍼티 추가)
}
