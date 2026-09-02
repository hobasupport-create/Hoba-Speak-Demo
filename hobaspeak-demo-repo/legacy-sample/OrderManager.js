// OrderManager.js — a fictional, hand-written "legacy code" sample built
// for the HoBASpeak demo. It is not real client code, not real HoBASpeak
// product code, and does not represent any actual business — it exists
// only to give HoBASpeak something deliberately messy to convert.
var OrderManager = function(taxRate) {
  this.taxRate = taxRate;
  this.orders = [];
  this.nextId = 1;
};

OrderManager.prototype.addOrder = function(customerName, items, callback) {
  var self = this;
  var subtotal = 0;
  for (var i = 0; i < items.length; i++) {
    subtotal = subtotal + (items[i].price * items[i].qty);
  }
  var tax = subtotal * self.taxRate;
  var total = subtotal + tax;

  var order = {
    id: self.nextId,
    customer: customerName,
    items: items,
    subtotal: subtotal,
    tax: tax,
    total: total,
    status: 'pending'
  };

  self.nextId = self.nextId + 1;
  self.orders.push(order);

  setTimeout(function() {
    callback(null, order);
  }, 0);
};

OrderManager.prototype.findOrder = function(orderId) {
  for (var i = 0; i < this.orders.length; i++) {
    if (this.orders[i].id === orderId) {
      return this.orders[i];
    }
  }
  return null;
};

OrderManager.prototype.cancelOrder = function(orderId) {
  var order = this.findOrder(orderId);
  if (order == null) {
    throw new Error('Order not found: ' + orderId);
  }
  if (order.status === 'shipped') {
    throw new Error('Cannot cancel a shipped order');
  }
  order.status = 'cancelled';
  return order;
};

OrderManager.prototype.summary = function() {
  var pending = 0;
  var cancelled = 0;
  var revenue = 0;
  for (var i = 0; i < this.orders.length; i++) {
    var o = this.orders[i];
    if (o.status === 'pending') {
      pending = pending + 1;
      revenue = revenue + o.total;
    } else if (o.status === 'cancelled') {
      cancelled = cancelled + 1;
    }
  }
  return 'Pending: ' + pending + ', Cancelled: ' + cancelled + ', Revenue: $' + revenue.toFixed(2);
};

module.exports = OrderManager;
