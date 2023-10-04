// Sample array
const numbers = [2, 5, 1, 8, 3, 7, 4, 6];

// 1. map(): Create a new array with each element squared
const squaredNumbers = numbers.map(num => num ** 2);
console.log("Squared numbers:", squaredNumbers);

// 2. filter(): Create a new array with elements greater than 4
const greaterThanFour = numbers.filter(num => num > 4);
console.log("Numbers greater than 4:", greaterThanFour);

// 3. reduce(): Calculate the sum of all elements
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sum);

// 4. find(): Find the first element greater than 5
const firstGreaterThanFive = numbers.find(num => num > 5);
console.log("First number greater than 5:", firstGreaterThanFive);

// 5. forEach(): Log each element to the console
numbers.forEach(num => console.log("Element:", num));

// 6. some(): Check if any element is even
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log("Has even number:", hasEvenNumber);

// 7. every(): Check if all elements are less than 10
const allLessThanTen = numbers.every(num => num < 10);
console.log("All numbers less than 10:", allLessThanTen);

// 8. sort(): Sort the array in ascending order
const sortedNumbers = numbers.slice().sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

// 9. reverse(): Reverse the array
const reversedNumbers = numbers.slice().reverse();
console.log("Reversed numbers:", reversedNumbers);

// 10. includes(): Check if the array includes the number 7
const includesSeven = numbers.includes(7);
console.log("Includes number 7:", includesSeven);

// 11. indexOf(): Find the index of the number 3
const indexOfThree = numbers.indexOf(3);
console.log("Index of number 3:", indexOfThree);

// 12. join(): Convert the array into a comma-separated string
const joinedNumbers = numbers.join(", ");
console.log("Joined numbers:", joinedNumbers);

