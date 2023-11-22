var valorEmDolar = 64;
var cotacaoDoDolar = 5.32;
var nome = "Marcelo Rocha ";

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("Olá " + nome + "o valor é R$" + valorEmReal);