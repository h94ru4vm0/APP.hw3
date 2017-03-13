'use strict'
//class
class Person{
  constructor(name){
    this.name=name;
  }
  printGreeting(){
    console.log(`Hi,i am ${this.name}!`)
  }
}

var person1=new Person('jackie');
person1.printGreeting();

var person2=new Person('chen');
person2.printGreeting();

//extends
class Employee extends Person{
  constructor(name,job){
    super(name);
    this.job=actor
  }
  printGreeting(){
    super.printGreeting();
    console.log(`hi,i am ${this.name}and i am a ${this.job}`);
  }
}

var person3=new Employee('Black Jack','doctor');
person3.printGreeting();

var person4=new Person('Yuan');
person4.printGreeting();

//prototype
Person.prototype.printGreeting=function(){
  console.log( `hi,i am ${this.name},and i have an apple.`);
}
person3.printGreeting();
person4.printGreeting();
