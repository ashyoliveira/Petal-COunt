function subtrair() {

    let numeroSub = Number(document.getElementById('sub').value)

    let resultado = ""

    for (let numero = numeroSub; numero >= 0; numero--) {

        console.log(numero)

        resultado += numero + " "

    }

    document.getElementById('resultadoSub').innerHTML = resultado
}


function incremento() {

    let numeroSoma = Number(document.getElementById('soma').value)

    let resultado = ""

    for (let numero = 0; numero <= numeroSoma; numero++) {

        console.log(numero)

        resultado += numero + " "

    }

    document.getElementById('resultadoSoma').innerHTML = resultado
}