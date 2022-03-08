//Exemplo não prático

/*console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')*/

//Exemplo bem mais prático, por while, logo abaixo *este é o tipo de laço mais simples que existe
//Chamado de estrutura de repetição com teste lógico no início

/*var c = 1
while (c <= 6) { //Lê-se, Enquanto o contador for menor ou igual a 6 e ou enquanto (c <= 6) for verdade
    console.log('Tudo bem?')
    c++ //c = c + 1, basicamente para lembrar, era 1, agora é 1 + 1
}*/

//Para aprimorar um pouco mais, posso fazer da maneira abaixo

/*var c = 1
while (c <= 3) { //Lê-se, Enquanto o contador for menor ou igual a 3 e ou enquanto (c <= 3) for verdade
    console.log(`Passo ${c}`)
    c++
}*/

//Agora, um exemplo de estrutura de repetição com teste lógico no final
//Ela primeiro executa o bloco e depois testa, diferente do ex acima que testa e depois executa

var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)