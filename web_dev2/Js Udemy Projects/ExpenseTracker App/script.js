document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("Expense-name");
  const amountInput = document.getElementById("Amount");
  const showExpenses = document.getElementById("show-expenses");
  const showTotal = document.getElementById("total");

  // store the expenses
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  // console.log(expenses);
  renderExpense();

  // Get the expenses
  expenseForm.addEventListener("submit", (e) => {
    // e.preventDefault();
    let expenseName = expenseNameInput.value.trim();
    console.log(expenseName);
    let Amount = amountInput.value.trim();
    // console.log(Amount);

    if (expenseName != "" && Amount != "" && Amount !== NaN) {
      const newExpense = {
        id: Date.now(),
        expenseName,
        Amount,
      };
      expenses.push(newExpense);
      saveToLocalStorage();
      renderExpense();
    }
      expenseNameInput.textContent = ''
      amountInput.textContent = ''
  });

  // display Expense
    function renderExpense() {
      showExpenses.innerHTML=''
    let totalAmount = 0;
    expenses.forEach((element) => {
      const Li = document.createElement("li");
      const btn = document.createElement("BUTTON");
      btn.dataset.id = element.id;
      btn.textContent = "Delete";
      Li.textContent = `${element.expenseName} - $${element.Amount}`;
      Li.appendChild(btn);
      showExpenses.appendChild(Li);
      totalAmount += parseInt(element.Amount);
    });
    // console.log(totalAmount);
    showTotal.textContent = totalAmount;
    }
    
    // delete expense
    showExpenses.addEventListener('click', (e) => {
     if (e.target.tagName === 'BUTTON') {
         const dataId = parseInt(e.target.getAttribute("data-id"));
         expenses = expenses.filter((expense) => expense.id !== dataId);
         saveToLocalStorage();
         renderExpense();
     }
 })

  //Save to Local Storage function
  function saveToLocalStorage(params) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
});
