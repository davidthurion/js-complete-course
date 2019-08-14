// BUDGET CONTROLLER
var budgetController = (function() {})();

// UI CONTROLLER
var UIController = (function() {})();

// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // Get field input data
    // Add item to budget controller
    // Add new item to UI
    // Calculate the budget
    // Display the budget to UI
    console.log("coucou");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
