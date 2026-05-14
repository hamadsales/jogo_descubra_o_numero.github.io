var tela_inicial = document.querySelector('div#tela-inicial')
var tela_jogo = document.querySelector('div#tela-jogo')
var numero;
var win = document.querySelector('img#win')

function easy() {
    //window.location.href = 'main.html'        // Muda de página
    numero = 5//Math.floor(Math.random() * 10)
    tela_inicial.style.display = 'none' //esconde o elemento na tela
    mostrar_tela()
}
function normal() {
    numero = Math.floor(Math.random() * 100)
    tela_inicial.style.display = 'none'
    mostrar_tela()
}
function hard() {
    numero = Math.floor(Math.random() * 1000)
    tela_inicial.style.display = 'none'
    mostrar_tela()
}

function mostrar_tela(){
    tela_jogo.style.display = '' //faz o elemento aparecer na tela
}
function esconde_tela(){
    tela_jogo.style.display = 'none'
    tela_inicial.style.display = ''
}

function verificarChute(){
    //se o botão recomeçar estiver desabilitado então habilite
    let chute = Number(document.querySelector('input#chute').value)
    if(chute == numero){
        window.alert('ganhou')
        win.src = 'win.jpg'
        win.style.display = ''
        //esconde_tela()
    }else{
        window.alert('tente novamente')
    }
}