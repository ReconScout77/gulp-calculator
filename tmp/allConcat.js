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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#result').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
