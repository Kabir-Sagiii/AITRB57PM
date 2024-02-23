import { price, f1 } from "./myFile1.mjs"; //Named Import

console.log(price);

f1();

function f2() {
  console.log("f2 is called");
}

export default f2;
