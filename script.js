function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        //Bom dia 
      imagem.src= './imagens/manha.png'
      document.body.style.background = '#e9c46a'
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde 
       imagem.src='./imagens/tarde.png'
       document.body.style.background = '#f4a261'
    }else {
        //Boa noite'
        imagem.src='./imagens/noite.png'
        document.body.style.background = '#001219'
    }
}
