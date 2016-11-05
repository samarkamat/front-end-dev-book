(function(window){
  'use strict';
  var App = window.App || {};
  function Truck(truckId, db){
    console.log('Running Truck function!');
    this.truckId = truckId;
    this.db = db;
  }
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  }
  Truck.prototype.deliverOrder = function(customerEmail) {
    console.log('Delivering order for '+ customerEmail);
    this.db.remove(customerEmail);
  }
  Truck.prototype.printOrders = function() {
    var customerEmailArray = Object.keys(this.db.getAll());
    console.log('Truck #' + this.truckId + ' has pending orders:');
    customerEmailArray.forEach(function(email) {
      console.log(this.db.get(email));
    }.bind(this));
  }
  App.Truck = Truck;
  window.App = App;
})(window);
