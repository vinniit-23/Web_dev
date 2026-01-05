document.addEventListener("DOMContentLoaded", () => {
  const expenseName = document.getElementById("Expense-name");
  const Amount = document.getElementById("Amount");
  const addExpenseBtn = document.getElementById("Add-Expense-btn");
  const showExpenses = document.getElementById("show-expenses");
  const displayTotal = document.getElementById("total");
  const expenseForm = document.getElementById("expense-form");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateAmount();
  renderExpense();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const expense = expenseName.value.trim();
    const expenseAmount = parseFloat(Amount.value.trim());

    if (expense != "" && expenseAmount != NaN && expenseAmount != "") {
      const newExpense = {
        id: Date.now(),
        expense,
        expenseAmount,
      };
      expenses.push(newExpense);
      saveToLocalStorage();
      updateTotal();
      renderExpense();
    }
    expenseName.textContent = "";
    Amount.textContent = "";
  });

  function calculateAmount() {
    return expenses.reduce((sum, expense) => sum + expense.expenseAmount, 0);
  }
  function renderExpense() {
    showExpenses.innerHTML = "";
    expenses.forEach((element) => {
      const Li = document.createElement("li");
      const btn = document.createElement("BUTTON");
      Li.textContent = `${element.expense} - $${element.expenseAmount}`;
      btn.textContent = `Delete`;
      btn.dataset.id = element.id;
      Li.appendChild(btn);
      btn.addEventListener("click", () => {});
      showExpenses.appendChild(Li);
    });
  }

  function updateTotal() {
    totalAmount = calculateAmount();
    displayTotal.textContent = totalAmount.toFixed(2);
  }

  function saveToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  showExpenses.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseID = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseID);
      saveToLocalStorage();
      renderExpense();
      updateTotal();
    }
  });
});
