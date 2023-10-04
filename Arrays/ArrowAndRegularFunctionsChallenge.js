//This is the example a Regular Function
function checkOddEvenRegular(number) {
    if (number % 2 === 0) {
      console.log(`${number} is even.`);
    } else {
      console.log(`${number} is odd.`);
    }
  }
  
  checkOddEvenRegular(5); // Output: 5 is odd.
  checkOddEvenRegular(10); // Output: 10 is even.

//And this example with arrow function

const checkOddEvenArrow = number => {
    if (number % 2 === 0) {
      console.log(`${number} is even.`);
    } else {
      console.log(`${number} is odd.`);
    }
  };
  
  checkOddEvenArrow(5); // Output: 5 is odd.
  checkOddEvenArrow(10); // Output: 10 is even.
  