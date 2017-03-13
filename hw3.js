//object-1
var person={
  firstname:'gi',
  lastname:'shuan',
  greet:function(){
    console.log(`hi,
${this.firstname}
${this.lastname}`);
  }
};
person.greet();
console.log(person['firstname']);

//object-2
let name,phone;
let info={
  name:name,
  phone:phone,
  printInfo:function(){
    console.log(`Name:${this.name},Phone:${this.phone}`);
  }
}
info.name="DTD";
info.phone="09XX-XXX-XXX";
info.printInfo();
