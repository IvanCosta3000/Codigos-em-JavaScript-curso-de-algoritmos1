/*Var

   nota1,nota2,media:real
   nome:caracter


Inicio

   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a primeira nota: ")
   leia(nota1)
   escreval("Digite a segunda nota: ")
   leia(nota2)
   media := (nota1+nota2)/2
   se media >= 7 entao
      escreval("Aluno Aprovado",nome)
   senao
      escreval("Aluno Reprovado",nome)
   fimse


Fimalgoritmo*/

var nome,nota1,nota2;
nome = prompt("Digite o nome do aluno: ");
nota1 = prompt("Digite a primeira nota: ");
nota2 = prompt("Digite a segunda nota: ");

media = (parseInt(nota1) + parseInt(nota2))/2;

if (media >=50){
      alert("Aprovado! "+nome)
}
else
      alert("Reprovado! " +nome)
   



