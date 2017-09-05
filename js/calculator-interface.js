var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('#calculator-form').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var calculator = new Calculator();
    var result = calculator.Add(number1, number2);
    $("#result").append("<h1>" + result + "</h1>");
  });
});
