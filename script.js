//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const Btry = document.querySelector("#Btry")
const Breset = document.querySelector("#Breset")

const randomNumber = Math.round(Math.random()* 10)
let xAttempts = 1

//Eventos 
Btry.addEventListener('click', botaoTryClick)
Breset.addEventListener('click', botaoResetClick)

function botaoTryClick(event){

// funções/ funçaõ callback (chamar-la de volta)
//          -argumento de uma função
//          callback---Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação \/

    event.preventDefault() //não faça o padrão 

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value)== randomNumber) {
       toggleScreen()

        document
        .querySelector(".screen2 h2")
        .innerText = `Acertou em  ${xAttempts}  tentativas`
        //explição2.0/\ 
        //OUTRA FORMA DE FAZER--- screen2.querySelector("h2").innerText=`Acertou em ${ xAttempts} tentativas`
    }
    inputNumber.value=""
    xAttempts++
}

function botaoResetClick(){
    toggleScreen()
    xAttempts = 1
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

//explicação3.0----- addEventListener() [adiciona evento e ouvidor/ o elemento que ira reagir a esse evento, no caso o "Btry"] event == "click"   Listener/ouvidor == "addEventListener"


// fazer uma condição de que so pode némeros de 0 a 10:
