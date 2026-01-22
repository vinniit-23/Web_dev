document.addEventListener("DOMContentLoaded", () => {
  // user will click on button
  // we have to display it
  // if it is number then we have to display it other wise make it blank
  // after click other button we have to add the button
  // do mathematical operations like +,-
  // show the result when it click to =
  // clear the screen if it clicks on AC



  /* how calculator works ?
  1. user inputs a number, suppose the number is 5 , now after user clicked the first number (i will store it in variable it will my currentnum and i will display it).
  2. the user input display.
  3. one condition raised it user inputs second number then it will append it from first number so for that we will use if condition and run it in loop unless or untill any operator is selected then we will concatenate the user input.
  4. if user clicks any operator than the currentnumm will be assigned to previousnum variable and the new user input will current num. e.g(previousnum = currentnum; currentnum = displayednum + value).
  5. now currentnum works same as before, until and unless any operator is selected i will concatenate the user input.
  6. one important things i have to store operator also to calculate the value.
  */

  const displayOutput = document.getElementById("display");
  const keys = document.querySelector(".calculator__keys");
  const ACbutton = document.querySelector(".action");
  let numbersBtn = document.querySelectorAll(".numbers");
  const operators = document.querySelectorAll(".operator");
  const equalButton = document.getElementById("equal");

  ACbutton.addEventListener("click", () => {
    displayOutput.textContent = 0;
  });

  let numArray = [];
  let expression = ''
  // let num1 = numArray[numArray.length - 1];
  // let num2 = numArray[numArray.length - 2];
  // console.log(num1);
      // console.log(num2);


  numbersBtn.forEach((Element) => {
    Element.addEventListener("click", () => {
      const value = Element.textContent;
      // console.log(value);
      display(value);
    });
  });

    decimalBtn.addEventListener("click", () => {
      if (expression === "" && !currentNum.includes(".")) {
        currentNum += ".";
        console.log(currentNum);
      } else if (!nextNum.includes(".") && expression !== "") {
        nextNum += ".";
        console.log(nextNum);
      }
    });

    decimalBtn.addEventListener("click", () => {
      if (expression === "") {
        decimalCheck(currentNum);
      } else {
        decimalCheck(nextNum);
      }
    });
    function decimalCheck(num) {
      if (!num.includes(".")) {
        num += ".";
      }
    }

  function display(value) {
    let displayedNum = displayOutput.textContent;
    numArray.push(displayedNum);
    console.log(numArray);
    // console.log(numArray[numArray.length - 1]);
    console.log(numArray[-1]);
    // console.log(num1);
    // console.log(num2);
    

    if (displayedNum === "0") {
      displayOutput.textContent = value;
    } else {
      displayOutput.textContent = displayedNum + value;
    }
  }

  operators.forEach((element) => {
    element.addEventListener("click", () => {
      // const operator = element.textContent;
      const action = element.dataset.action;
      let result = eval(expression);
      // console.log(result);
        let num1 = numArray[numArray.length - 1];
        let num2 = numArray[numArray.length - 2];
      if (action === "+") {
        expression = num1 + num2
                    
        
        console.log(action);
        
        printOutput(result);
      } else if (action === "-") {
        console.log(action);
      } else if (action === "*") {
        console.log(action);
      } else if (action === "/") {
        console.log(action);
      } else {
        displayOutput.textContent = "Error";
      }
    });
  });

  function printOutput(result) {
    console.log(result);
    equalButton.addEventListener("click", () => {
      displayOutput.textContent = result;
    });
  }

  /* keys.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const calcKey = e.target;
      const value = calcKey.textContent;
      const action = calcKey.dataset.action;
      const displayedNum = displayOutput.textContent;
      let numArray = [];
      numArray.push(displayedNum);

      if (action !== "=" && action !== "clear") {
        if (displayedNum === "0") {
          displayOutput.textContent = value;
        } else {
          displayOutput.textContent = displayedNum + value;
        }
      }
      console.log(numArray);
      console.log(displayedNum);
      if (action === "+") {
        console.log(action);

        //   add(displayedNum,)
      } else if (action === "-") {
        console.log(action);
      } else if (action === "*") {
        console.log(action);
      } else if (action === "/") {
        console.log(action);
      } else if (action === "decimal") {
        console.log(action);
      }
    }
  }); */
});
