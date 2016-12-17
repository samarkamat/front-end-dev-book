(function(window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var $ = window.jQuery;

  var myTruck = new Truck ('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

  $("[id=strengthLevel]").change(function(){
    console.log("range changed");
    $("[id=strval]")[0].textContent = $("[id=strengthLevel]")[0].value;
  });

  console.log(formHandler);
})(window);
