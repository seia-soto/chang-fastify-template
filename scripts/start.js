const { createInstance } = require('../src')

const server = createInstance()

server.listen(3000, (error, addr) => {
  if (error) {
    throw error // 따로 에러를 처리하지는 않았습니당
  }

  console.log(addr, '에서 대기 중!')
})
