
function acaoBotao() {
    var valor1,valor2,resultado,operacao
    //prompt("A proposta desse programa e calcular dois valores na operação de sua escolha.");
    valor1 = prompt("Digite o primeiro valor: ");
    operacao = prompt("Digite a operação desejada(Ex: +,-,*,/): ");
    valor2 = prompt("Digite o segundo valor: ");
     
    //Estrura if else para calculo das quatro operações básicas 
    
    if (operacao =="+"){
         resultado = parseInt (valor1) + parseInt(valor2)
    }else if(operacao == "-"){
        resultado = parseInt (valor1) - parseInt (valor2)
    }else if(operacao == "*"){
        resultado = parseInt (valor1) * parseInt (valor2)
    }else if(operacao == "/"){
        resultado = parseInt (valor1) / parseInt (valor2)
    }
        
    document.getElementById("paragrafo").innerText = resultado  
   
      
   } 
   
   
  



