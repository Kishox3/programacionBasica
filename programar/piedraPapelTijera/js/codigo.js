function aleatorio(min, max)
{
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function eleccion(jugada)
{
    let resultado = ""

    if(jugada == 1)
    {
        resultado = "Piedra 🪨"
    } 
    else if (jugada == 2)
    {
        resultado = "Papel 📃"
    }
    else if (jugada == 3)
    {
        resultado = "Tijera ✂️"
    }
    else
    {
        resultado = "Nulo 💀"
    }

    return resultado
}

function combate(pc, jugador)
{
    if(pc == jugador)
    {
        alert("EMPATE 😐")
        alert(marcador(triunfos, perdidas))
    }
    else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2))
    {
        alert("GANASTE 😎")
        triunfos++
        alert(marcador(triunfos, perdidas))
    }
    else
    {
        alert("PERDISTE 😵‍💫")
        perdidas++
        alert(marcador(triunfos, perdidas))
    }
}

function marcador(triunfo, perdida)
{
    resultado = "Triunfos: " + triunfo + " - Perdidas: " + perdida
    return resultado
}

//variables
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

//ciclo ganar 3 veces
while(triunfos < 3 && perdidas < 3)
{
    
    pc = aleatorio(1,3)         //eleccion pc
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")       //eleccion jugador

    //display de elecciones
    alert("PC elige: " + eleccion(pc))
    alert("Jugador elige: " + eleccion(jugador))

    combate(pc, jugador)
    
}