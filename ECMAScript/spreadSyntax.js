// Spread syntax

// destructuring
const a = [1, 2, 3, 4, 5];

const [head, ...rest] = a;

console.log(head, rest); // 1 [ 2, 3, 4, 5 ]

// Object Merge
const publicData = {
  nickname: "overflowbin",
};

const personData = {
  email: "bin11788@gmail.com",
  password: "****",
};

// 덮어 쓰기를 쓸데 flag를 만들어서 한다 안한다의 방식을 넣을 수 있다.
const shouldOverride = false;

// ...overrides를 합치려는 object에 맨뒤에 넣으면 덮어쓰기가 가능하다.
const overrides = {
  email: "fasd@gmail.com",
};

const user1 = {
  ...personData,
  ...publicData,
  ...(shouldOverride ? overrides : null),
};

console.log(user1); // 하나의 object로 됨

// functions property spread systex
function foo(head, ...rest) {
  console.log(head);
  console.log(rest);
  console.log(Array.isArray(rest));
}

foo(1, 2, 3, 4, 5);
