/*Exercício escrita 1

Resolva os passos a seguir

a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: [ "Vitinho", "Vitão", "Vit" ]
}

// Exemplo de saída
// "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

Dica: não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!

Agora, usando o operador "spread", crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

let pessoa = {
    nome: "Giovane", 
    apelidos: [ "Geo", "Gio", "Russo" ],
}

let pessoaOutrosApelidos = {
    ...pessoa,
    apelidos: [ "Amor", "Vida", "Bom" ],
}

function resultado(objeto) {     
    console.log('Eu sou ' + objeto.nome + ', mas pode me chamar de ' + objeto.apelidos[0] + ', ' + objeto.apelidos[1] + ' ou ' + objeto.apelidos[2] + '.')
}

resultado(pessoa)
resultado(pessoaOutrosApelidos)

*/

/*Exercício escrita 2

Resolva os passos a seguir
 
 a) Crie dois "objetos" diferentes com as seguintes propriedades: nome, idade e profissão. 
 
 b) Escreva uma "função" que receba um "objeto" de cada vez e retorne um "array" com as seguintes informações:
 - O valor de "nome".
 - O numero de caracteres do valor "nome".
 - O valor de "idade".
 - O valor de "profissão".
 - O numero de caracteres do valor "profissão".


const pessoa = {
	nome: "Bruno", 
	idade: 23, 
	profissao: "Instrutor"
}


function minhaFuncao(pessoa) {
	let resultado = []

	// Desenvolver sua logica

	return resultado
}


console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]

let pessoa1 = {
	nome: "Giovene", 
	idade: 16, 
	profissao: "Estudante"
}
let pessoa2 = {
    nome: "Francisco", 
	idade: 50, 
	profissao: "Professor"
}

function minhaFuncao (objeto) {
    let resultado = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return resultado
}


console.log(minhaFuncao(pessoa1))
console.log(minhaFuncao(pessoa2))

*/

/*Exercício escrita 3

Resolva os passos a seguir

a) Crie uma variável de escopo global que guarde um "array" vazio chamada "carrinho".

b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome ("string") e disponibilidade ("boolean" - devem começar como "true").

c) Crie uma função que receba um "objeto" fruta por parâmetro e coloque-a dentro do "array" de "carrinho". Invoque essa função passando os três objetos criados. Dica: aqui você deve usar o método "push()".

d) Imprima a variável "carrinho" e garanta que ela agora seja um "array" preenchido com três objetos.

let carrinho = []

let fruta1 = {
    nome: 'maça',
    disponibilidade: 'true'
}

let fruta2 = {
    nome: 'manga',
    disponibilidade: 'true'
}

let fruta3 = {
    nome: 'banana',
    disponibilidade: 'true'
}

function objeto (fruta) {
    carrinho.push(fruta)
    return
}

objeto(fruta1)
objeto(fruta2)
objeto(fruta3)

console.log(carrinho)

*/

/*Exercício interpretação 1

Leia o código

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [ "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish" ], 
	transmissoesHoje: [
		{ canal: "Telecine", horario: "21h" }, 
		{ canal: "Canal Brasil", horario: "19h" }, 
		{ canal: "Globo", horario: "14h" }
	]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// O que vai ser impresso no console?

Matheus Nachtergaele
Virginia Cavendish
Object
canal: "Globo"
horario: "14h"

*/

/*Exercício interpretação 2

Leia o código

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

a)nome: 'Juca', idade: 3, raca: 'SRD'}
  nome: 'Juba', idade: 3, raca: 'SRD'}
  nome: 'Jubo', idade: 3, raca: 'SRD'}


b)Ele copia o objeto que vem depois dos três pontos.

*/

/*Exercício interpretação 3

Leia o código

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

a)false
  undefined

b)Deu undefined por causa que não tinha a chave altura.

*/