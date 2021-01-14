class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails() {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class charAccount extends UserAccount {
  nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }
}