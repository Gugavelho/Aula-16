
/**
 * 
 * Repita o exerc�cio anterior, mas utilizando a estrutura de "switch/case".
 * 
 * Dica: Lembre-se que "switch/case" � como se fosse um "if", mas verifica somente igualdades estritas (===).
 * 
**/

let turno = prompt("Digite 'm' se você estuda no periodo matutino 'v' para vespertino e 'n' para noturno.")

switch (turno) {
    case "m":
        mensagem = "Bom dia!"
        break

    case "v":
        mensagem = "Boa tarde!"
        break

    case "n":
        mensagem = "Boa noite!"
        break

    default:
        mensagem = "Turno invalido!"
}

console.log(mensagem)