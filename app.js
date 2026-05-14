function easy() {
    //window.location.href = 'main.html'        // Muda de página
    let numero = 5//Math.floor(Math.random() * 10)
}
function normal() {
    let numero = 10//Math.floor(Math.random() * 100)
}
function hard() {
    let numero = 15//Math.floor(Math.random() * 1000)
}

function verificarChute(){
    let chute = Number(document.querySelector('input#chute').value)
    if(chute == numero){
        window.alert('Acertou')
    }else{
        window.alert('tente novamente')
    }
}