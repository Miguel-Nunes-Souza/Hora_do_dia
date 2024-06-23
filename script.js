
function carregar() {
var msg = document.getElementById('msg')
var foto = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = (`Agora são ${hora} horas`)

if (hora >= 0 && hora < 12){
    foto.src = 'foto_manha.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18){
    foto.src = 'foto_tarde.jpg'
    document.body.style.background = '#b9846f'
} else {
    foto.src = 'foto_noite.jpg'
    document.body.style.background = '#515154'
}
}
