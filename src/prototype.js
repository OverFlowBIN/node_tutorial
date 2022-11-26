// prototype

function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet() {
  return `Hi, my name is ${this.name}!`
}

function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying.`
}

// Student의 prototype을 Person.prototype으로 설정
Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('YoungBin')
// console.log(me) // Student { name: 'YoungBin' }
console.log(me.greet())
console.log(me.study())
console.log(me instanceof Person) // true
console.log(me instanceof Student) // true

const anotherPerson = new Person('foo')
console.log(anotherPerson instanceof Student) // false
console.log(anotherPerson instanceof Person) // true

console.log([] instanceof Array) // true
console.log([] instanceof Object) // true
