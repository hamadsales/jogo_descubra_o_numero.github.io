var tela_inicial = document.querySelector('div#tela-inicial')
var tela_jogo = document.querySelector('div#tela-jogo')
var numero;
var win = document.querySelector('img#win')
var header = document.querySelector('img#header')
var botao_inicial = document.querySelector('button#btn-chutar')
var botao_recomeco = document.querySelector('button#btn-novo')
var entrada = document.querySelector('input#chute')

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

function verificarChute(){
    //se o botão recomeçar estiver desabilitado então habilite
    let chute = Number(document.querySelector('input#chute').value)
    if(chute == numero){
        botao_inicial.style.display = 'none'
        botao_recomeco.disableb = ''
        win.src = 'win.jpg'
        win.style.display = ''
        header.style.display = 'none'
        entrada.style.display = 'none'
    }else{
        window.alert('tente novamente')
    }
}

function reiniciarJogo(){

}