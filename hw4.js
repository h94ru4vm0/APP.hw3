//this
(function(){console.log(this)})();

let person={
  firstname:'gi',
  lastname:'shuan',
  greet1:function(){
    console.log(this);
  },
  greet2:()=>{
    console.log(this);
  },
  greet3:function(){
    (()=>console.log(this))();
  }
};
person.greet1();
person.greet2();
person.greet3();