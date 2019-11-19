(function (window) {
    'use strict';
    var App = window.App || {};

    //Constructor
    function Truck(truckId, db) {
      this.truckId = truckId;
      this.db = db;


    }

    Truck.prototype.createOrder = function (order) {
      console.log('Adding order for ' + order.emailAddress);
      this.db.add(order.emailAddress, order);
    }


    Truck.prototype.DeliverOrder = function (customerId) {
      console.log('Delivered order for ' + customerId);
      this.db.add(this.db.remove(), customerId);
    }

    Truck.prototype.printOrders = function () {

      // The 'Object.keys' function extracts the keys that are contained in the database and then assigns it to the 'customerId' as an array.
      var customerIdArray = Object.keys(this.db.getAll());


      console.log('Truck #' + this.truckId + 'has pending orders:');
      customerIdArray.forEach(function(id) {
        console.log(this.db.get(id));
      }.bind(this));
    }
      // The 'bind(this)' makes the above function recognize that 'this.' is referring to the current object.

    App.Truck = Truck;
    window.App = App;

}) (window);

/*JavaScript - Notes:
  - JavaScript functions are actually objects and can have their ownn properties and methods.*/
