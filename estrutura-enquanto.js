/*
Var nome:caracter 
idade,limite,contador:inteiro


Inicio

   escreva("Digite a quantidade de vezes que vai ser verificado a idade: ")
   leia(limite)
   contador:=0
   enquanto contador < limite faca
      escreva("Digite seu nome: ")
      leia(nome)
      escreva("Digite sua idade ",nome,": ")
      leia(idade)
      se idade >18 entao
         escreval("O individuo ",nome," é maior de idade!")
      senao
         escreval("O individuo ",nome," é menor de idade!")
      fimse
      contador := contador + 1
   fimenquanto


*/

function acaoBotao() {
    var nome,idade,limite,contador
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    contador = 0 
    while (contador < limite) {
        nome = prompt("Digite seu nome: ")
        idade = prompt("Digite sua idade "+nome+": ")
        if (idade>18) 
            document.getElementById("paragrafo").innerText = "O individuo "+nome+" e maior de idade!"  
        
        else 
            document.getElementById("paragrafo").innerText = "O individuo "+nome+" e menor de idade!"
            
        


    contador++    
    }
   
      
   } 