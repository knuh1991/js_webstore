/*
(function() {
  'use strict';
   document.write('IIFE');
})  ();
*/

//The 'window' object is global, and refers to window that that the script is initiated on.
(function(window) {
  'use strict';
  //Variable 'App' is assigned to the window.App reference if created, else and empty object is created for it to be assigned to.
  var App = window.App || {};

  //Function that is local to the 'IIFE' function that prints to the console.

  //Constructor
  function DataStore() {
    console.log('running the DataStore function');
    this.data = {};
  }

  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };

  DataStore.prototype.get = function(key) {
    return this.data[key];
  };
  DataStore.prototype.getAll = function () {
    return this.data;
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
