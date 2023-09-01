
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?

//Esta criando um variavel com nome de 'numero', o transformando em número, enviando um prompt pedindo para o usuario digitar um número.

// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?

//O console imprimirá "esse número passou no teste".
//O console não imprimiria nada, Erro: mensagem não foi definido

// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.

//sim, pois há um comando fora do "if" que está tentando puxar uma variavel de dentro.