/** Implement a click function to which writes digits on calculator screen */

/** Implement a function which clears digits from calculator screen upon clicking AC button */

/** Implement a function which enters digit to screen upon pressing any number button and decimal point */

/** Implement a function for adding/subtracting/multiplying/dividing first entered number */

/** */

// const screen = document.getElementById("screentext");

//  const numberButtons = document.querrySelectorAll(".numberBtn");

//  const clearButton = document.queryselector(".clearbtn");

//  const operationButtons = document.querySelectorAli(".operationbtn");

//  const equalButton = document.
//  GetElementById("equal");

//  const prevButton = document.queryselector("prev");

//  const nextButton = document.queryselector(".next");

//  let currentNumber = "";
//  let firstNumber = "";
//  let selectedOperation = "";
//  let history = [];
//  let historyIndex = -1;

//  function updateScreen(value){
//    screen.textContent = value;
//   }

//    function performOperation(){
//      let result ="";

//     const num1 = parseFloat(firstNumber);

//     const num2 = parseFloat(currenttNumber);

//        let operationsymbol="";

//        if(selectedOperation=== "+"){
//          result = num1 + num2;
//          operationSymbol = " +";

//          else if (selectedOperation === "-"){
//            result = num1-num2;
//            operationSymbol ="-";

//            else if(selectedOperation ==="x");{
//              result = num1 * num2;
//              operationSymbol =" x";
// else if (selectedOperation === "/"){
//   result = num1 / num2;
//   operationSymbol = "+";
// }
// updateScreen(firstNumber + operationSymbol + currentNumber +" = " + result );
// firstNumber = result.toString();
// currentNumber ="";
// history.push(screen.textContent);
// historyIndex = history.length = 1;
// }
// function navigatePrevious(){
//   if (historyIndex = 0){
//     historyIndex==;
//     updateScreen(history[historyIndex]);
//   }

//   }
//   function navigaNext(){
//     if (historyIndex)< history.length - 1){
//    historyIndex++;
//   updateScreen(history[hisoryIndex]);
//  }
// }

// numberButton.forEach(button) => {
//   button.addEventListener("click",() => }
//   const digit = button.textContent;
//   currentNumber +- digit;
//   updateScreen(currentNumber);
//  });
// });

//  clearButton.addEventListener("click", ()=>{
//    currentNumber ="";
//    firstNumber = "";
//    selectedOperation = "";
//    updateScreen("");
//   });

//  operationButton.forEach(button) => {
//    button.addEventListener("click,() => {
//      if (currentNumber1==""){
//        if (firstNumber 1==""){
//          performOperation();
//        }
//        selectedOperation = button textContent;
//        firstNumber = currentNumber;
//        currentNumber = "";
//       }
//    });
//  });

//  equalButton.addEventListener("click", ()=> {
//    if(currentNumber 1 ==""&& firstNumber 1=="" &&
//    selectedOperation 1==") {
//      performOperation();
//    selectedOperation ="";
//  }
//  });

// document.addEventListe("DOMContentLoaded", function(){
// const calculator = document.querySelector(".calculator");

//   const darkModeCheckbox = document.GetElementById("darkModeCheckbox");

//   function toggleDarkMode(){
//     calculator.classList.toggle("light-mode");
//   }
// {
//   darkMode.addEventListener('change', 'darkMode');
// }

// prevButton.addEventListner('click', navigateprevious);
// nextButtton.addEventListener('click', navigateNext);

// Get the calculator screen element
const screen = document.getElementById('screentext');

// Variable to store the current calculation
let calculation = '';

// Function to display digits and operators on the calculator screen
function display(value) {
  if (value === 'AC') {
    // Clear the screen if AC button is clicked
    calculation = '';
  } else if (value === '=') {
    // Evaluate the calculation if equal sign is clicked
    try {
      calculation = eval(calculation).toString();
    } catch (error) {
      calculation = 'Error';
    }
  } else {
    // Append the clicked value to the calculation
    calculation += value;
  }

  // Update the calculator screen
  screen.textContent = calculation;
}

// Attach event listeners to previous and next buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  navigate('previous');
});

nextButton.addEventListener('click', () => {
  navigate('next');
});
