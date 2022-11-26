// eslint-disable-next-line max-classes-per-file
class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    return `Hi, ${this.name}.`
  }
}

class Student extends Person {
  constructor(name) {
    super(name)
  }

  study() {
    return `${this.name} is studying.`
  }
}

const me = new Student('YoungBin')
console.log(me.study())
console.log(me.greet())
