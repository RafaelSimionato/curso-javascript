var idade = 75
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não vota`)
} else {
    if (idade >=16 && idade < 18) { //Posso tirar a idade >=16, pois se <16 não vota e <18 é opcional, fica obvio
        console.log(`Voto opcional`)
    } else {
        if (idade >= 70) {
            console.log(`Voto opcional`)
        } else {
            console.log(`Vota`)
        }
    }
}