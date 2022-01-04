function initLampada(){

    const buttonON = document.querySelector('[data-click="on"]')
    const buttonOFF = document.querySelector('[data-click="off"]')
    const buttonQuebrar = document.querySelector('[data-click="quebrar"]')
    const buttonConsertar = document.querySelector('[data-click="consertar"]')
    const lampada = document.querySelector('#lamp')
    

    function ligarLampada() {
        lampada.src = 'img/ligada.jpg'
    }
    

    function desligarLampada() {
        lampada.src = 'img/desligada.jpg'
    }
    

    function quebrarLampada(e) {
        buttonON.disabled = true
        buttonOFF.disabled = true
        lampada.src = 'img/quebrada.jpg'
    }
    

    function consertarLampada() {
        lampada.src = 'img/desligada.jpg'
        buttonON.disabled = false
        buttonOFF.disabled = false
    }
    
    
    buttonON.addEventListener('click', ligarLampada)
    buttonOFF.addEventListener('click', desligarLampada)
    buttonQuebrar.addEventListener('click', quebrarLampada)
    buttonConsertar.addEventListener('click', consertarLampada)

}
initLampada()