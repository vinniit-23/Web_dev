document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const calculator__keys = document.querySelector(".calculator__keys");
  const operators = document.querySelectorAll(".operator");
  const numbers = document.querySelectorAll(".numbers");
  const ACbutton = document.querySelector(".action");
  const equalButton = document.getElementById("equal");
  const decimalBtn = document.getElementById("decimal");

  let currentNum = "";
  let nextNum = "";
  let expression = "";

  // 1. check the number is is consist decimal or not
  // 2. if not then add decimal after user click's decimal button
  // Problem:- the main problem is we don't know which number user is typing, whether he is typing current num or nextnum.
  //  Add decimal button logic
  // decimalBtn.addEventListener("click", () => {
  //   if (expression === "") {
  //     const returnValue = decimalCheck(currentNum);
  //     currentNum = returnValue
  //   } else {
  //     const returnValue = decimalCheck(nextNum);
  //     nextNum = returnValue;
  //   }
  // });
  // function decimalCheck(num) {
  //   if (!num.includes(".")) {
  //     return  num += ".";
  //   }
  // }

  /**    decimalBtn.addEventListener("click", () => {
      if (expression === "" && !currentNum.includes(".")) {
        currentNum += ".";
        console.log(currentNum);
      } else if (!nextNum.includes(".") && expression !== "") {
        nextNum += ".";
        console.log(nextNum);
      }
    }); */

  decimalBtn.addEventListener("click", () => {
    if (expression === "") {
      if (!currentNum.includes(".")) {
        currentNum += ".";
        console.log(currentNum);
        display.textContent = currentNum;
      }
    } else {
      if (!nextNum.includes(".")) {
        nextNum += ".";
        console.log(nextNum);
        display.textContent = nextNum;
      }
    }
  });

  ACbutton.addEventListener("click", () => {
    display.textContent = 0;
    currentNum = "";
    nextNum = "";
    expression = "";
  });

  equalButton.addEventListener("click", function equal() {
    if (currentNum && nextNum && expression) {
      const result = operations(currentNum, nextNum, expression);
      display.textContent = result;
      currentNum = result;
      nextNum = "";
      expression = "";
      // console.log(`Result of operations ${result}`);
    }
    // console.log(`Expressions ${expression}`);
  });

  // function add(num1, num2) {
  //   return parseFloat(num1) + parseFloat(num2);
  // }

  numbers.forEach((Element) => {
    Element.addEventListener("click", () => {
      const value = Element.textContent;
      //   let displayedNum = display.textContent;
      if (expression === "") {
        currentNum += value;
        display.textContent = currentNum;
      } else {
        nextNum += value;
        display.textContent = nextNum;
      }

      // console.log("current number", currentNum);
      // console.log("next number", nextNum);
    });
  });

  function operations(currentNum, nextNum, action) {
    let num1 = parseFloat(currentNum);
    let num2 = parseFloat(nextNum);
    try {
      if (action === "+") {
        return num1 + num2;
      } else if (action === "-") {
        return num1 - num2;
      } else if (action === "*") {
        return num1 * num2;
      } else if (action === "/") {
        if (num2 === 0) {
          throw new Error(`Denominator can't be zero`);
        }
        return num1 / num2;
      }
    } catch (error) {
      console.error("Some error detected");
    }
  }

  operators.forEach((Element) => {
    Element.addEventListener("click", () => {
      let displayedNum = display.textContent;
      let operator = Element.textContent;
      let action = Element.dataset.action;
      // if (!expression.includes("action")) {
      expression = action;
      // display.textContent = displayedNum + operator;
      // }
    });
  });
});
