var city = "mumbai"; // global scope

function display() {
  // Global Scope (Scope of this is function is global)
  var username = "Raj Verma"; // function scope
  console.log("display() is called");
  city = "delhi";
  console.log(city);
}

display();

function f1() {
  //global scope
  display();
  city = "pune";
  username = "Sneha"; //error

  function fn() {
    // function scope
    console.log("fn is called");
  }
}
