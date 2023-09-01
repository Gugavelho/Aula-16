
/**
 * 
 * Fa�a um programa que ergunta ao usu�rio a sua idade e imprima no console se ela/e pode dirigir (apenas maiores de idade).
 * 
 * a) Fa�a um "prompt" para receber a idade do usu�rio e guarde em uma vari�vel.
 * 
 * b) Garanta que essa vari�vel � do tipo "Number".
 * 
 * c) Agora veja se essa idade do usu�rio corresponde � idade m�nima que permite dirigir. Se sim, imprima no console "Voc� pode dirigir", caso contr�rio, imprima "Voc� n�o pode dirigir."
 * 
**/

let idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18){
    mensagem = "Você pode dirigir!"
}

else {
    mensagem = "Você não pode dirigir!"
}

console.log(mensagem)