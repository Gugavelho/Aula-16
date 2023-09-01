
# Desafios

---

#### Desafio 1

Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", perguntar ao usuário, pelo `prompt` qual lanche ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHE]", trocando [LANCHE] pelo texto que o usuário colocou no `input`.

---

#### Desafio 2

Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final;
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos
    
O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade).

Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,90)

**Exemplo de saída, jogo nacional**

```
---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Nacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980
Valor total:  R$ 19800
```

**Exemplo de saída, jogo internacional**

```
---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  U$ 482.92682926829275
Valor total:  U$ 4829.2682926829275
```
