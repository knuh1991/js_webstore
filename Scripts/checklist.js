(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw Error('No selector provided');
    }

    this.$element = $(selector);

    if (this.$element.length === 0) {
      throw Error ('Could not find element with selector: ' + selector);
    }
  }



  function Row(coffeeOrder) {
    //Constructor code will go here

    /*
    The variable '$div' declared below is the equivalent of the following div tag; '<div data-coffee-order = "checkbox" class="checkbox">...</div>'

    "var $div = $ ('<div></div>', {
    'data-coffee-order' : 'checkbox',
    'class' : 'checkbox'
      });""


      The variable '$checkbox' does not have the single quotation marks for both of its properties (type,value), this is different for the variable '$div' shown above which has single quotation marks for both its properties (data-coffee-order and class).
      The reason for this is that for property names that have special characters such as a dash (-), are expected to have a single quotation in order for the Javascript to read it, the 'class' is a Javascript keyword hence why it also has quotations.
    */
    var $div = $ ('<div></div>', {
      'data-coffee-order': 'checkbox',
      'class':'checkbox'
    });

    var $label = $('<label></label>')


    var $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: coffeeOrder.emailAddress
    });

    var description = coffeeOrder.size + ' ';
    if (coffeeOrder.flavor) {

      description += coffeeOrder.flavor + ' ';
    }

    description += coffeeOrder.coffee + ', ';
    description += '('+ coffeeOrder.emailAddress + ')';
    description += '[' + coffeeOrder.strength + 'x]';

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div
  }

  CheckList.prototype.addRow = function (coffeeOrder) {
    // Create a new instance of a row, using the coffee order info
    var rowElement = new Row(coffeeOrder);
    // Add the new row instance's $element property to the checklist
    this.$element.append(rowElement.$element);
    };

  App.CheckList = CheckList;
  window.App = App;
}) (window);
