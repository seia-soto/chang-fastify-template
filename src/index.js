const fastify = require('fastify')
// const fastifyOracle = require('fastify-oracle')
const router = require('./router')

/**
 * 새 Fastify 인스턴스를 생성하는 함수, 쉬운 기능 테스트를 위해서 서버 시작이 아니라 인스턴스를 생성함.
 *
 * @param {import('fastify').FastifyServerOptions} options Fastify 옵션
 * @returns Fastify 인스턴스 반환
 */
const createInstance = (options) => {
  const server = fastify(options)

  // Oracle DB Connector 설정 (fastify에 데코레이터를 설정해주는 플러그인입니다)
  // 데코레이터 개념은 Fastify 인스턴스에 새로운 프로퍼티를 붙이는 작업을 의미.
  // server.register(fastifyOracle, {
  //   pool: { // 폼폼푸린 방구 소리 * 냄새 주의 *
  //     user: '유저명',
  //     password: '비밀번호',
  //     connectString: '주소:포트/데이터베이스이름'
  //   }
  // })

  // api router를 /api 접두사로 등록
  server.register(router, { prefix: '/api' })

  // 서버 인스턴스와 안전하게 종료할 수 있는 함수를 반환
  return server
}

// Object로써 Module을 밖으로 빼냄
module.exports = {
  createInstance
}
