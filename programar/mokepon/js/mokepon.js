//escuchara los eventos despues de cargar todo el html
window.addEventListener("load", iniciarJuego) 

//util
function numeroAleatorio(min, max)
{
    return Math.floor(Math.random()*(max - min + 1) + min)
}


//flujo
function iniciarJuego()
{
    let botonMokeponJugador = document.getElementById("boton-seleccionar-mokepon")
    botonMokeponJugador.addEventListener("click", flujoVideojuego)
}

function flujoVideojuego()
{   
    seleccionarMokeponJugador()
    if(seleccionarMokeponJugador() != undefined)
    {
        seleccionarMokeponComputadora()
        mostrarMokeponDinamicamente(mokeponJugador, mokeponComputadora, psJugador, psComputadora)

        let botonAtaqueEspecial = document.getElementById("boton-ataque-especial")
        botonAtaqueEspecial.addEventListener("click", ataqueEspecial)

        let botonAtaqueFisico = document.getElementById("boton-ataque-fisico")
        botonAtaqueFisico.addEventListener("click", ataqueFisico)

    }else
    {
        alert("Debes seleccionar un Mokepon")
    }

}


//seleccion de mokepons
function seleccionarMokeponJugador()
{
    let mokepon001 = document.getElementById("mokepon001")
    let mokepon002 = document.getElementById("mokepon002")
    let mokepon003 = document.getElementById("mokepon003")

    if(mokepon001.checked)
    {
        mokeponJugador = "Drauion 🔥"
    }
    else if(mokepon002.checked)
    {
        mokeponJugador = "Balisk 💧"
    }
    else if(mokepon003.checked)
    {
        mokeponJugador = "Imir 🌿"
    }

    psJugador = 100
    return mokeponJugador
}

function seleccionarMokeponComputadora()
{
    let random = numeroAleatorio(1,3)
    
    if(random == 1)
    {
        mokeponComputadora = "Drauion 🔥"
    }
    else if(random == 2)
    {
        mokeponComputadora = "Balisk 💧"
    }
    else if(random == 3)
    {
        mokeponComputadora = "Imir 🌿"
    }

    psComputadora = 100
}

function mostrarMokeponDinamicamente(mJugador, mComputadora, pJugador, pComputadora)
{
    let spanMokeponJugador = document.getElementById("span-mokepon-jugador")
    let spanMokeponComputadora = document.getElementById("span-mokepon-computadora")
    let spanPsJugador = document.getElementById("span-ps-jugador")
    let spanPsComputadora = document.getElementById("span-ps-computadora")

    spanMokeponComputadora.innerHTML = mComputadora
    spanMokeponJugador.innerHTML = mJugador   
    spanPsJugador.innerHTML = pJugador
    spanPsComputadora.innerHTML = pComputadora
}


//section ataques y calculo de daño
function ataqueAleatorioEnemigo()
{
    random = numeroAleatorio(1,2)
    if (random == 1)
    {
        ataqueComputadora = "✨"
        dañoAtaqueJugador = 10
        dañoColateralJugador = 0
    }
    else if (random == 2)
    {
        ataqueComputadora = "🎯"
        dañoAtaqueComputadora = 15
        dañoColateralComputadora = 3
    }
}

function seleccionAtaqueJugador()
{

}

function ataqueEspecial()
{
    ataqueJugador = "✨"
    dañoAtaqueJugador = 10
    dañoColateralJugador = 0
    ataqueAleatorioEnemigo()
    calculoDaño()
    mostrarAtaqueDinamicamente()
}

function ataqueFisico()
{
    ataqueJugador = "🎯"
    dañoAtaqueJugador = 15
    dañoColateralJugador = 3
    ataqueAleatorioEnemigo()
    calculoDaño()
    mostrarAtaqueDinamicamente()
}

function calculoDaño()
{

}


//display
function mostrarAtaqueDinamicamente()
{
    let spanAtaqueJugador = document.getElementById("span-ataque-jugador")
    let spanAtaqueComputadora = document.getElementById("span-ataque-computadora")

    spanAtaqueJugador.innerHTML = ataqueJugador
    spanAtaqueComputadora.innerHTML = ataqueComputadora
}




