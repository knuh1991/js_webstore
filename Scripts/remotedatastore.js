(function (window) {
  'use strict';
  var App = window.App || {}
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error ('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (key,val) {
    // Code will go here

    //jQuery's post method. The method requires two pieces of information: the URL of the server to the request to and what data to include.
    $.post(this.serverUrl, val, function (serverResponse){
      console.log(serverResponse);
    });

    // The method can be invoked via the browser's console as shown below;
    //  var remoteDS = new App.RemoteDataStore("http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders");
    //  remoteDS.add('a@b.com', {emailAddress:'a@b.com', coffee: 'espresso'});
    /*  Output: Object {
            __v: 0
            _id: "5d90965e29d10504001b5231"
            coffee:"espresso"
            emailAddress:"a@b.com"
        }
    */
    //

  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

}) (window);
