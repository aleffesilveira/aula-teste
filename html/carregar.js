function carregar() {
    var msg = window.documentos.getelementsByid("msg");
    var img = window.document.getElementById("imagen");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = 'agora sao $(horas) horas.';
    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'cachorro 1.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde!
        img.src = 'cachorro 2.png';
        document.body.style.background = '#b9846f';
    } else {
        //boa noite!
        img; src = 'cachorro 3.png';
        document.body.style.background = '#515154';
    }
}
