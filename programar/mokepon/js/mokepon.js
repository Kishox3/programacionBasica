let ataqueJugador
let ataqueComputadora

function numeroAleatorio(min, max)
{
    return Math.floor(Math.random()*(max - min + 1) + min)
}


function iniciarJuego()
{
    let botonMokeponJugador = document.getElementById("boton-seleccionar-mokepon")
    botonMokeponJugador.addEventListener("click", flujoVideojuego)
}

function flujoVideojuego()
{
    seleccionarMokeponJugador()
    seleccionarMokeponComputadora()
    mostrarMokeponDinamicamente(seleccionarMokeponJugador(), seleccionarMokeponComputadora())

    let botonAtaqueEspecial = document.getElementById("boton-ataque-especial")
    botonAtaqueEspecial.addEventListener("click", ataqueEspecial)

    let botonAtaqueFisico = document.getElementById("boton-ataque-fisico")
    botonAtaqueFisico.addEventListener("click", ataqueFisico)
}

function seleccionarMokeponJugador()
{
    let mokepon001 = document.getElementById("mokepon001")
    let mokepon002 = document.getElementById("mokepon002")
    let mokepon003 = document.getElementById("mokepon003")
    let mokeponJugador = ""

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
    else
    {
        alert("Debes seleccionar un Mokepon")
    }

    //alert("El Mokepon del jugador es: " + mokeponJugador)
    return mokeponJugador
}

function seleccionarMokeponComputadora()
{
    let random = numeroAleatorio(1,3)
    let mokeponComputadora = ""
    
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
    //alert("El Mokepon de la computadora es: " + mokeponComputadora)
    return mokeponComputadora
}

function mostrarMokeponDinamicamente(jugador, computadora)
{
    let spanMokeponJugador = document.getElementById("span-mokepon-jugador")
    let spanMokeponComputadora = document.getElementById("span-mokepon-computadora")

    spanMokeponComputadora.innerHTML = computadora
    spanMokeponJugador.innerHTML = jugador   
}

function ataqueEspecial()
{
    ataqueJugador = "ATK Especial"
    alert(ataqueJugador)
}

function ataqueFisico()
{
    ataqueJugador = "ATK Fisico"
    alert(ataqueJugador)
}

//escuchara los eventos despues de cargar todo el html
window.addEventListener("load", iniciarJuego) 

