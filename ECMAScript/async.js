// async, awit
// 코드의 유지보수성
// 비동기 작업을 마치 동기작업하는 것처럼 사용할 수 있다(헷갈리지 않음)
// 쓸데없는 scope를 줄일 수 있다.
// async function은 기본적으로 promise 객체를 돌려준다.
// Promise를 return 하는 함수는 async 함수로 만들 수 있고
// async 함수는 다른 async함수 안에서 await할 수 있다.
// error는 try, catch를 통해 잡을 수 있다.

async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, duration)
  })
}

async function main() {
  console.log("first")
  await sleep(1000)
  console.log("second")
  await sleep(1000)
  console.log("third")
  await sleep(1000)
  console.log("finish!")
}

main()
