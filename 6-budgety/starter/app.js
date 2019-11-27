// BUDGET CONTROLLER
var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  }

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  }

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };


  var calculateTotal = function (type) {
    var sum = 0;

    data.allItems[type].forEach(function (current) {
      sum += current.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItem: function (type, desc, val) {
      var newItem, ID;

      // [1 2 3 4 5], new ID = 6
      // [1 2 4 6 8], new ID = 9
      // ID = last ID + 1
      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item for inc or exp
      if (type === "exp") {
        newItem = new Expense(ID, desc, val);
      } else if (type === "inc") {
        newItem = new Income(ID, desc, val);
      }

      // Push it into data structure
      data.allItems[type].push(newItem);

      return newItem;

    },

    deleteItem: function (type, ID) {
      var ids, index;
      // id = 6
      // ids = [1 2 4 6 8]
      // index = 3
      ids = data.allItems[type].map(function (current) {
        return current.id;
      });

      index = ids.indexOf(ID);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function () {
      // calculate total income and expenses
      calculateTotal("exp");
      calculateTotal("inc");

      // calculate budget
      data.budget = data.totals.inc - data.totals.exp;

      // calculate % of income
      // Expense = 100 and income = 200 | 100 / 200 = 0.5 * 100 = 50
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function () {
      /*
        a = 20 / b = 20 / c = 40
        income = 100
        a = 20/100 = 20%
        b = 10/100 = 10%
        c = 40/100 = 40%
      */
      data.allItems.exp.forEach(function (current) {
        current.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function () {
      var allPerc = data.allItems.exp.map(function (current) {
        return current.getPercentage();
      });
      return allPerc;
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    testing: function () {
      console.log(data);
    }
  }
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };

  var formatNumber = function (number, type) {
    /* 
    + or -
    1511,4567 => 1.511,46
    */
    var numberSplit, int, dec;

    number = Math.abs(number);
    number = number.toFixed(2);

    numberSplit = number.split('.');
    int = numberSplit[0];
    dec = numberSplit[1];

    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }



    return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
      };
    },

    addListItem: function (obj, type) {
      var html, newHtml, element;

      // Create html string with placeholder text
      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMStrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value));

      // Insert the html into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    deleteListItem: function (selectorID) {
      var element = document.getElementById(selectorID);
      element.parentNode.removeChild(element);
    },

    clearFields: function () {
      var fields, fieldsArr;
      fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function (current, index, array) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    displayBudget: function (object) {

      object.budget > 0 ? type = "inc" : type = "exp";

      document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(object.budget, type);
      document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(object.totalInc, 'inc');
      document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(object.totalExp, 'exp');


      if (object.percentage > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent = object.percentage + '%';
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = '--';
      }
    },

    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

      var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '--';
        }
      });
    },

    displayMonth: function () {
      var now, year, month;
      now = new Date();

      months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ];
      month = now.getMonth();
      year = now.getFullYear();

      document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
    },

    getDOMStrings: function () {
      return DOMStrings;
    }
  };
})();

// GLOBAL CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
  };

  var updatePercentages = function () {
    // Calculate percentages
    budgetCtrl.calculatePercentages();

    // Read percentages from budget controller
    var percentages = budgetCtrl.getPercentages();

    // Update user interface with percentages
    UICtrl.displayPercentages(percentages);
  };

  var updateBudget = function () {
    // Calculate new budget
    budgetCtrl.calculateBudget();

    // Return the budget
    var budget = budgetCtrl.getBudget();

    // Display new budget to the ui
    UICtrl.displayBudget(budget);
  };

  var ctrlAddItem = function () {
    var input, newItem;
    // Get the input data
    input = UICtrl.getInput();
    console.log(input);

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // Add item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      console.log(newItem);

      // Add new item to the ui
      UICtrl.addListItem(newItem, input.type);

      // Clear the fields
      UICtrl.clearFields();

      // Calculate and update budget
      updateBudget();

      // Calculate and update percentages
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      // inc-1
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // Delete from data structure
      budgetCtrl.deleteItem(type, ID);

      // Delete from UI
      UICtrl.deleteListItem(itemID);

      // Update and show the new budget
      updateBudget();

      // Calculate and update percentages
      updatePercentages();
    }
  };

  return {
    init: function () {
      console.log('App has started');
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();