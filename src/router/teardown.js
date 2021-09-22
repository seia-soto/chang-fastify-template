const replies = require('../replies')
const decorateReq = require('../middlewares/decorateReq')

/**
 * Teardown 라우터
 *
 * @param {import('fastify').FastifyInstance} fastify 초기화된 Fastify 객체
 * @param {*} opts 옵션 값
 * @param {*} done 끝나고 호출해야 하는 거
 */
module.exports = (fastify, opts, done) => {
  fastify.route({
    url: '/',
    method: 'GET',
    handler: async (request, reply) => replies.teardownResult('난... ㄱ ㅏ끔... 눈물을 흘린 ㄷ ㅏ ....')
  })

  fastify.route({
    url: '/',
    method: 'POST',
    preHandler: [ // 미들웨어 등록
      decorateReq // request.chang을 등록해줌
    ],
    handler: async (request, reply) => replies.teardownResult(request.chang) // 여기에서 사용
  })

  done()
}
