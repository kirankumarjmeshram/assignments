function personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  
  const person = {
    name: "Kirankumar",
    age: 30
  };
  
  personInfo.call(person);//Name: Kirankumar, Age: 30