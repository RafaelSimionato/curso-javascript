function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //FullYear pega o ano com 4 dígitos
    var fano = document.getElementById('txtano') //Esta variavel fano, pega os dados do input de Ano de Nascimento do HTML
    var res = document.querySelector('div#res') // Esta variavel res, pega os dados da 2 div do HTML de id = res
    /*A primeira coisa para se fazer agora, é verificar se o ano está vazio, ou se é maior que o ano atual */
    if (fano.value.length == 0 || fano.value > ano) { //Se o quera não digitou o ano, ou então, digitou um ano maior que o atual
        window.alert('[ERROR]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //radsex[0] é mas, e radsex[1] é fem
        var idade = ano - Number(fano.value) //Este é o cálculo da idade
        /*res.innerHTML = `Idade calculada: ${idade}`*/ //Apenas um teste de funcionamento
        var gênero = '' //'' == vazio
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //Isso é o mesmo que ir no HTML e colocar img id='foto
        if (fsex[0].checked) { //Se o que esta marcado inicialmente, "checked" for zero, é sinal de que é masculino
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'homemcriança.png')
            } else if (idade >= 10 && idade < 21) { //Posso tirar a primeira parte "idade >= 10 &&" por questão de lógica, mas resolvi deixar
                // Jovem
                img.setAttribute('src', 'homemadolesc.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulhercriança.png')
            } else if (idade >= 10 && idade < 21) { //Posso tirar a primeira parte "idade >= 10 &&" por questão de lógica, mas resolvi deixar
                // Jovem
                img.setAttribute('src', 'mulheradolescen.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //Este comando adiciona um elemento, que no caso é o elemento img (fotos)
    }

}