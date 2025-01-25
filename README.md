# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number'. This occurs when a variable of numeric type is assigned a string value. The example showcases how this error might unexpectedly happen due to implicit type coercion or unanticipated inputs.

## Bug

The `bug.ts` file contains a simple program illustrating this error.  Variable `z` is declared as a number but is assigned a string, leading to a compile-time error.

## Solution

The `bugSolution.ts` file demonstrates how to fix this. The problem is solved by either explicitly defining z as a string or by ensuring that any values assigned to z are numbers (by using type guards or input validation).