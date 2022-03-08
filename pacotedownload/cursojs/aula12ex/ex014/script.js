function carregar() {//Para rodar este "carregar()", coloquei "onload no body do HTML"
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //*Estes 2 objetos acima são referentes a div msg, e a imagem com id imagem
    var data = new Date()
    var hora = data.getHours()//Este objeto pega a hora atual do sistema utilizado
    //var hora = 8 //Usar esta variável para testes*
    msg.innerHTML = `Agora são ${hora} horas`
    //Para mostrar a imagem correta conforme o horário, vou criar a condição abaixo
    if (hora >= 5 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f' //Este comando fará a mudança de cor de fundo conforme imagem
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}