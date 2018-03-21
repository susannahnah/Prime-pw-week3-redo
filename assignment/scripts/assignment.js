// BASE MODE

// Create a variable with a value of an array with the following values: 3, 6, 7, 10
let array = [3, 6, 7, 10];
// Create a variable called 'myValue' with a value of 0
let myValue = 0;
// Console log the value of the array at index 2
console.log(array[2]);
// Remove the last item in the array, then console log the array
array.pop();
console.log(array);
// Add the value 15 to the end of the array
array.push(15);
// Write a `for` loop to console log each value in the array
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// HARD MODE

// Write a `while` loop that will increase the value of 'myValue' by 1 until its value is 10
while (myValue < 10) {
    myValue++;
}
// Change the second value in the array from 6 to 20, then console log the array
array[1] = 20;
console.log(array);
// PRO MODE

// Change the `for` loop from base mode to a `for in` loop
for (value in array) {
    console.log(value);
}
// Write a `for` loop that console logs each value in the array, 
// and if the index of the array matches the value of 'myValue', also console log 'Hurray!'


// INSTRUCTOR'S NOTE: This is vague on purpose. It can either be interpreted as the actual index (0, 1, 2, etc),
// or the value at that index. The way it's written, the index seems more correct, but I moreso want to see
// students write the for loop with an if statement, and see how they handle non-specific requirements

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (i === myValue) {
        console.log('Hurray!');
    }
}

// OR

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === myValue) {
        console.log('Hurray!');
    }
}
