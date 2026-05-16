const variaveis = {} //cria um objeto que não muda, mas as propriedades dele podem mudar.
var numero;
var tentativas = 0;

function criarvar(nome,tag,id){
    variaveis[nome] = document.querySelector(`${tag}#${id}`)
}

criarvar('tela_inicial','div','tela-inicial');
criarvar('tela_jogo','div','tela-jogo')
criarvar('win','img','win')
criarvar('header_jogo','img','header-jogo')
criarvar('header_inicio','img','header-inicio')
criarvar('botao_inicial','button','btn-chutar')
criarvar('botao_recomeco','button','btn-novo')
criarvar('entrada','input','chute')
criarvar('p','p','paragrafo')

//Podemos depois criar uma função exibirPaginaInicial() e exibirJogo() para melhorar o código
//adicionar as dicas se o numero do chute é maior ou menor que o numero indicado
//adicionar setAtributte no disabled


function easy() {
    //window.location.href = 'main.html'        // Muda de página
    numero = Math.floor(Math.random() * 10)
    variaveis.tela_inicial.style.display = 'none' //esconde o elemento na tela
    mostrar_tela()
}
function normal() {
    numero = Math.floor(Math.random() * 20)
    variaveis.tela_inicial.style.display = 'none'
    mostrar_tela()
}
function hard() {
    numero = Math.floor(Math.random() * 50)
    variaveis.tela_inicial.style.display = 'none'
    mostrar_tela()
}

function mostrar_tela(){
    variaveis.tela_jogo.style.display = '' //faz o elemento aparecer na tela
}

function verificarChute(){
    let paravraTentativa = tentativas == 0 ? 'tentativa' : 'tentativas' //operador ternário no JS
    
    if(tentativas == 0){
        variaveis.botao_recomeco.disabled = false
        tentativas++
    }else{
        tentativas++
    }
    
    let chute = Number(document.querySelector('input#chute').value)
    if(chute == numero){
        variaveis.botao_inicial.style.display = 'none'
        variaveis.botao_recomeco.disabled = false //disabled é false ou true
        variaveis.win.style.display = ''
        variaveis.entrada.style.display = 'none'
        variaveis.win.src = 'win.jpg'
        variaveis.header_inicio.style.display = 'none'
        variaveis.header_jogo.style.display = 'none'
        variaveis.p.innerHTML = `Você ganhou com ${tentativas} ${paravraTentativa}`
    }else{
        variaveis.entrada.value = ''
        variaveis.p.innerHTML = `Tentativa número ${tentativas}`
    }
}

function reiniciarJogo(){
    tentativas = 0
    variaveis.botao_recomeco.disabled = true
    variaveis.botao_inicial.style.display = ''
    variaveis.win.style.display = 'none'
    variaveis.tela_jogo.style.display = 'none'
    variaveis.header_inicio.style.display = ''
    variaveis.tela_inicial.style.display = ''
    variaveis.header_jogo.style.display = ''
    variaveis.entrada.style.display = ''

    variaveis.entrada.value = ''
    variaveis.p.innerHTML = `Tentativa número ${tentativas}`
}
