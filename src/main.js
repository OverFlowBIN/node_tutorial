// @ts-check

// Formatting, Linting, Type Checking
// Formatting : Prettier
// Linting : ESLint
// type checking : TypeScript

/* eslint-disable-next-line no-console */
console.log('hello, world')

// const someSting = 'javascript'
// const result = Math.log(someSting) // typescript 설치 후 에러가 뜬다.
// console.log(result) // NaN 이 뜬다.

const http = require('http')

const server = http.createServer((req, res) => {
  res.statuscode = 200
  res.end('hello server!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The sever is listening at port: ${PORT}`)
})
