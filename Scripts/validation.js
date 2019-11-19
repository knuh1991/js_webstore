(function (window) {
  'use strict';
  var App = window.App || {};

  /*
    The function below is used for validating the email field. The validation is set against a regular expression below ;

      1 /.+@coffeeShop : The /. declares that this is a regular expression, the '+' states that one or my characters are expected before.
      2 \.com$/. : The \. indicates that the full stop should be taken as a literal period. The $ sign states that there should not be anymore values shown after the '.com'.

  */
  var Validation = {
    isCompanyEmail: function (email) {
      return /.+@coffeeShop\.com$/.test(email);
    }

  };

App.Validation = Validation;
window.App = App;

})(window);
