//Segunda opção para o mesmo exercício 011.js
var idade = 15
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade <18 || idade > 70) { //Posso tirar a idade >=16, pois se <16 não vota e <18 é opcional, fica obvio
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório`)
}