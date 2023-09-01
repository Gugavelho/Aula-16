
/**
 * 
 * Fa�a um programa que verifica que turno do dia um aluno estuda.
 * 
 * Pe�a para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".
 * 
**/

let turno = prompt("Digite 'm' se você estuda no periodo matutino 'v' para vespertino e 'n' para noturno.")

if (turno === "m") {
    mensagem = "Bom dia!"
}

else if (turno === "v") {
    mensagem = "Boa tarde!"
}

else if (turno === "n") {
    mensagem = "Boa Noite"
}

else {
    mensagem = "Turno invalido!"
}

console.log(mensagem)