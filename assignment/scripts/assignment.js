// REQUIRED FEATURES

// 1. Create a variable with a value of an array with the following (number) values: 3, 6, 7, 10
let numbers = [ '3', '6', '7', '10' ];
// 2. Create a variable called 'myValue' with a value of the number 0
let myValue = 0;
// 3. Console log the value of the array at index 2
console.log( numbers[2] );
// 4. Remove the last item in the array, then console log the array
numbers.pop();
// 5. Add the value of number 15 to the end of the array
numbers.push( 15 );
// 6. Write a `for` loop that console logs each value in the array
for( let i=0; i<numbers.length; i++ ){
  console.log( numbers[ i ] );
}

// STRETCH GOALS

// 7. Write a `while` loop that will increase the value of 'myValue' by 1 until its value is 10
const max = 10;
while( myValue < max ){
  console.log( myValue );
  myValue++;
}
// 8. Change the second value in the array from 6 to 20, then console log the array
numbers[1] = '20';
for( let i=0; i<numbers.length; i++ ){
  console.log( numbers[i] );
}
// 9. Below, rewrite the `for` loop from question 6 to a `for of` loop

// 10. Reassign the value of `myValue` to 3. Then, write a `for` loop that console logs each value in the array,
// and if the index of the array matches the value of 'myValue', also console log 'Hurray!'
