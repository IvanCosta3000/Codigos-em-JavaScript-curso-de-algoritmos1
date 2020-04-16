

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