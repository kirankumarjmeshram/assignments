let age = 25; 

function displayAge() {
  console.log("Age inside displayAge():", age);
}

function changeAge() {
  age = 30; 
  console.log("Age inside changeAge():", age);
}


displayAge();  // 25
changeAge();   // 30
displayAge();  // 30
