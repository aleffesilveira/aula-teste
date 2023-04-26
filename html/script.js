function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora =  data.getHours();
    msg.innerHTML = `agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'cachorro1.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = 'cachorro2.png';
        document.body.style.background = '#b9846f';
    } else {
        //boa noite!
        img.src = 'cachorro3.png';
        document.body.style.background = '#515154';
    }
}
