(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR ='[data-coffee-order="checklist"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var myTruck = new Truck('ncc-1701', new DataStore());
  var formHandler = new FormHandler(FORM_SELECTOR);
  var CheckList = App.CheckList;
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);

  //formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  formHandler.addSubmitHandler(
    function (data) {
      myTruck.createOrder.call(myTruck, data);
      checkList.addRow.call(checkList,data);
    });


  formHandler.addInputHandler(Validation.isCompanyEmail);
  //formHandler.changeSlider(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);

})(window);
