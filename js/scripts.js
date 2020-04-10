// Business Logic for Pizza
function Pizza() {
  this.size = 0
  this.topping = []
}

Pizza.prototype.addTopping = function(topChoice) {
  if((topChoice).checked) {
    this.topping.push(topChoice.val())
  }
}

Pizza.prototype.totalCost = function() {
  return this.size + this.topping;
}

Pizza.prototype.pieSize = function(sizeChoice) {
  if ((sizeChoice).checked) {
    this.size.push(sizeChoice.val())
  }
}



// UI Logic
$(document).ready(function() {

})