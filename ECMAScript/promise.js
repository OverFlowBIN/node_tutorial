// promise

// new Promise((resolve, reject) => {
//   console.log("inside promise"); // promise 객체를 만들기만 해도 console이 찍힌다.
//   console.log("befor resolve");
//   resolve("First resolve");
//   console.log("after resolve");
//   reject(new Error("First reject"));
// })
//   .then((value) => {
//     console.log("inside first then");
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// promoise를 사용하면 scope이 나눠져있기떄문에 value를 나눠줄 필요가 없다.
function returnPromiseForTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random()) // then을 타고 바로 다음으로 넘어감, value를 넘겨준다.
    }, 1000)
  })
}

returnPromiseForTimeout()
  .then((value) => {
    console.log("then 1")
    console.log(value)
    return returnPromiseForTimeout()
    // promise를 return하게 되면 해당 promise가 resolve될때까지 기다린 다음에 다음 then이 실행된다 => promise chain이 가능해짐
  })
  .then((value) => {
    console.log("then 2")
    console.log(value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log("then 3")
    console.log(value)
    return returnPromiseForTimeout()
  })

// returnPromiseForTimeout()

// node에서 primise 사용
const fs = require("fs")
const { setMaxIdleHTTPParsers } = require("http")

function readFileInPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (error, value) => {
      if (error) reject(error)
      else resolve(value)
    })
  })
}

readFileInPromise("package.json").then((value) => console.log(value))

// node에서 제공하는 fs + promise
fs.promises
  .readFile("functionalApproach.js", "utf-8")
  .then((value) => console.log(value))
