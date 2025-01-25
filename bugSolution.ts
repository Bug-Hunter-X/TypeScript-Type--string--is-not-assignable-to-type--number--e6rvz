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

// Solution 1: Correct type
let z: string = "hello";

// Solution 2: Type guard (if the value could be a string or a number)
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

let numOrString: number | string = 10;

if (isNumber(numOrString)) {
    let z: number = numOrString;
} else {
    let z: string = numOrString;
}

// Solution 3: Input validation
function checkNumber(value: any) {
    if(typeof value !== 'number') {
        throw new Error("Value is not a number");
    }
    return value;
}
let num : number = checkNumber(10);
let z : number = num;