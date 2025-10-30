// Example-1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragarph = document.getElementById("myParagraph");
    paragarph.textContent = "this paragraph is changed";
    // console.log(paragarph);
  });

// Example-2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citylist = document.getElementById("citiesList");
    citylist.firstElementChild.classList.add("highlight");
  });

// Example-3
document.getElementById("changeOrder").addEventListener("click", function () {
  let changeType = document.getElementById("coffeeType");
  changeType.textContent = "Espresso";
  //   console.log(changeType);
});

// Example-4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "egg";
  document.getElementById("shoppingList").append(newItem);
});

// Example-5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

// Example-6
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("event handling example");
  });

// Example-7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("you selected " + event.target.textContent);
  }
});

// Example-8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `feedback is ${feedback}`;
  });

// Example-9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example-10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let description = document.getElementById("descriptionText");
    description.classList.toggle("highlight");
  });
