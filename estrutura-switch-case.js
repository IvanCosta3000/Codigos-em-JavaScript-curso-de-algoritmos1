function acaoBotao() {
    var valor1,valor2,resultado,operacao
    //prompt("A proposta desse programa e calcular dois valores na operação de sua escolha.");
    valor1 = prompt("Digite o primeiro valor: ");
    operacao = prompt("Digite a operação desejada(Ex: +,-,*,/): ");
    valor2 = prompt("Digite o segundo valor: ");
   //estrutura swith-case para calculo das quatro operações básicas
    switch (operacao) {
        case "+":
            resultado = parseInt (valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt (valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt (valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt (valor1) / parseInt(valor2)
            break;        

   
      
   } 
   
   
   document.getElementById("paragrafo").innerText = resultado  
}