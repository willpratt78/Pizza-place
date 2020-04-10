// Business Logic for Pizza
function Pizza() {
  this.size = 0;
  this.topping = 0;
}

Pizza.prototype.addTopping = function(topChoice) {
  if((topChoice).checked) {
    this.topping.add.parseInt((topChoice.val()))
  }
}

Pizza.prototype.totalCost = function() {
  return this.size + this.topping;
}

Pizza.prototype.pieSize = function(sizeChoice) {
  if ((sizeChoice).checked) {
    console.log(sizeChoice)
    this.size.push(sizeChoice.val())
  }
}

var sm = document.getElementById("sm")
var md = document.getElementById("md")
var lg = document.getElementById("lg")
var xl = document.getElementById("xl")

// UI Logic
$(document).ready(function(){
  $('form#pizza-price').submit(function(event){
    event.preventDefault()

    if ("#sm" === true)
    return this.size
    console.log(this.size)
    })    
  })


