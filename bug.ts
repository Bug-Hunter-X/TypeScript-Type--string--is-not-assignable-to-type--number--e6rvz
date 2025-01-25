function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let x: number = 10;
let y: number = 5;

console.log(add(x, y)); // Output: 15
console.log(subtract(x, y)); // Output: 5

//Uncommon error: Type 'string' is not assignable to type 'number'.
let z: number = "hello";