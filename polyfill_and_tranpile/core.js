// core-js

require("core-js")
// 새로생긴 sciprt기능을 사용하고 싶지만 node버전을 이전버전으로 fix해야하는 경우 사용할 수 있다.
// 실행시간이 조금 걸린다.
// import 또한 ES14이상부터 사용할 수 있는 기능이다. config에서 사용여부를 체크해야한다.

// 14 이후에 사용할 수 있는 flat method
const complicatedArray = [1, [2, 3]]
const flattendArray = complicatedArray.flat()
console.log(flattendArray)
// 만약 node 10 버전에서 flat을 사용하려면 안된다 그럴떄 core-js를 사용해야 된다.

// 14 이후에 사용할 수 있는 replaceAll]

method
const original = "abcabc123"
const changed = original.replaceAll("abc", "123")
// 이전 버전에선 replaceAll이 없었다.
console.log(changed)
