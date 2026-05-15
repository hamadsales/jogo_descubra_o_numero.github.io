var tela_inicial = document.querySelector('div#tela-inicial')
var tela_jogo = document.querySelector('div#tela-jogo')
var numero;
var win = document.querySelector('img#win')
var header_jogo = document.querySelector('img#header-jogo')
var header_inicio = document.querySelector('img#header-inicio')
var botao_inicial = document.querySelector('button#btn-chutar')
var botao_recomeco = document.querySelector('button#btn-novo')
var entrada = document.querySelector('input#chute')
var tentativas = 0;
var p = document.querySelector('p')



function easy() {
    //window.location.href = 'main.html'        // Muda de página
    numero = Math.floor(Math.random() * 10)
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
    
    if(tentativas == 0){
        botao_recomeco.disabled = false
        tentativas++
    }else{
        tentativas++
    }
    
    let chute = Number(document.querySelector('input#chute').value)
    if(chute == numero){
        botao_inicial.style.display = 'none'
        botao_recomeco.disabled = false //disabled é false ou true
        win.style.display = ''
        entrada.style.display = 'none'
        win.src = 'win.jpg'
        header_inicio.style.display = 'none'
        header_jogo.style.display = 'none'
        p.innerHTML = `Você ganhou com ${tentativas} tentativas`
    }else{
        entrada.value = ''
        p.innerHTML = `Tentativa número ${tentativas}`
    }
}

function reiniciarJogo(){
    tentativas = 0
    botao_recomeco.disabled = true
    botao_inicial.style.display = ''
    win.style.display = 'none'
    tela_jogo.style.display = 'none'
    header_inicio.style.display = ''
    tela_inicial.style.display = ''
    header_jogo.style.display = ''
    entrada.style.display = ''

    entrada.value = ''
    p.innerHTML = `Tentativa número ${tentativas}`
}
