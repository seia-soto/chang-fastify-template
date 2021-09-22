const teardown = require('./teardown')
const sample = require('./sample')

/**
 * API 라우터, FastifyPlugin(fp, 줄임말)의 형식으로 작성해야 합니다.
 *
 * @param {import('fastify').FastifyInstance} fastify 초기화된 Fastify 객체
 * @param {*} opts 옵션 값
 * @param {*} done 끝나고 호출해야 하는 거
 */
module.exports = (fastify, opts, done) => {
  fastify.register(teardown, { prefix: '/teardown' }) // /teardown 아래에 등록
  fastify.register(sample, { prefix: '/sample' }) // /sample 아래에 등록

  done()
}
