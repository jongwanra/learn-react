class Cat {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }
}

class MyCat extends Cat {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  showAge() {
    console.log(this.age);
  }
  showName() {
    console.log(this.name + '입니다.');
  }
}

const cat = new MyCat('parl', 4);
console.log(cat);
