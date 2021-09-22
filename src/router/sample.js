const replies = require('../replies')
const sample = require('../models/sample')

/**
 * Sample 라우터
 *
 * @param {import('fastify').FastifyInstance} fastify 초기화된 Fastify 객체
 * @param {*} opts 옵션 값
 * @param {*} done 끝나고 호출해야 하는 거
 */
module.exports = (fastify, opts, done) => {
  fastify.route({
    url: '/',
    method: 'GET',
    handler: async (request, reply) => {
      const name = await sample.getName()
      const age = await sample.getAge()

      return replies.sampleResult({
        name,
        age
      })
    }
  })

  done()
}
