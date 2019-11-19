(function(window) {
  'user strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');

    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  } // End of the 'FormHandler(selector)' constructor.


  /* FormHandler function before the change to add a function as a parameter.
  FormHandler.prototype.addSubmitHandler = function() {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {

      // The event.preventDefault(); function stops the normal action of the submit button from being intitiated.
      event.preventDefault();

      // The data object created below is the holder that will take each form name and assign the corresponding value to it as a key value pair.
      var data = {};

      // The jQuery below extracts the field name and field value using the selector '[data-coffee-order"form"]', and assigns each form element's name and value to the data object.
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;


        //This function prints to console the item name, which is the name value that each of the form elements that are included in the index.html are given with the value the user
        // selected in the form.
        console.log(item.name + ' is ' + item.value);

      });// End of the '$(this).serializeArray().forEach'

      console.log(data);

    }); // End of the 'this.$formElement.on('submit', function(..)'

  }; // End of the 'FormHandler.prototype.addSubmitHandler' function */

  /* Silver Challenge: Showing the Value as the Slider Changes

    *Create a handler for the slider's change event. As the value of the slider changes, show the numbers next to the label.

    * As an extra challenge, change the color of the number (or the label) to reflect the intensity fo the caffeine strength.
      Use green for the the weaker coffee, yellow for the regular strength coffee, and red for very strong coffee.

    Steps in creation


  */

  /*

    The method 'addSubmitHandler' pulls in the value of each of the form elements and displays it in the console it, the first silver challenges requires that the number
    of the slider is displayed, the retrieval of the value is a change to 'this.$formElement.on('submit..', so that the value that is checked for is the name value of the slider.

    A hover effect would be added so that the value would then appear. The challenge requires that the value be shown, so the hover effect will not be added.

    this.$formElement.on('strength')



  FormHandler.prototype.changeSlider = function(fn){
    console.log('running the changeSlider');
    // The below is shown whenever the slider is moved.
    this.$formElement.change(function() {
    console.log($("input[name ='strength']").val())
    var val = $("input[name = 'strength']").val();
    // Insert a check to see whether a bug h
    if ($('.form-group[title="rating"]').length) {
      $('.rating').remove();

      $('.form-group[title="rating"]').prepend("<p class='rating'><strong>"+ val +"</strong></p>");
    }
    else {
      $('.form-group[title="rating"]').prepend("<p class='rating'><strong>"+ val +"</strong></p>");


    }


    });

};   */ //Silver Challenge Coffee Rating



  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');

    this.$formElement.on('submit', function(event) {
      event.preventDefault();

    var data = {};
    $(this).serializeArray().forEach(function(item) {
      data[item.name] = item.value;
      console.log(item.name + ' is ' + item.value);

    }); // End of the $(this).serializeArray.forEach'

    console.log(data);
    fn(data);

    //This clears the form once submitted.
    this.reset();

    // Once submitted the first field in the form is set to 'focus'.
    this.elements[0].focus();

  });

};


//This function works with the Validation.js, which contains a single validation check verifying whether the email meets the regular expression that has been set.
FormHandler.prototype.addInputHandler = function (fn){

  console.log('Setting input handler for form');
  //Event handler code will go here
  this.$formElement.on('input', '[name="emailAddress"]',function (event){
    var emailAddress = event.target.value;
    var message ='';

    if (fn(emailAddress)) {
      event.target.setCustomValidity('');

    }else{
      message = emailAddress + ' is not an authorized email address!'
      event.target.setCustomValidity(message);
    }

  });

};

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
