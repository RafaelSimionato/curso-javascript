var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
//Para testar intervalos é melhor usar as condições, por ex.: (if, else)
//O switch é muito importante para testar dados pontuais e ou valores pontuais, ex.: 0,1,2,3
//O switch só funciona com números inteiros e ou caractéres (strings)

//console.log(diaSem) //Este comando mostra o dia em formato de número

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: //Opcional
        console.log(`[ERROR] Dia inválido!`)
        break //Opcional
}