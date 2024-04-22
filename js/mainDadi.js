/*
Usa il file dadi.html e il relativo dadi.js.
Genera due numeri random tra 1 e 6 (inclusi), uno per il giocatore e uno per il computer.
Stabilisci il vincitore, in base a chi ha ottenuto il punteggio più alto.
*/

const sendButton = document.getElementById('start')
const plNr = document.getElementById('pl')
const cpNr = document.getElementById('cp')
const wiNa = document.getElementById('wn')



sendButton.addEventListener('click', function() {



let player = (Math.floor(Math.random ()*6) +1)
console.log(player)
plNr.append(player)

let computer = (Math.floor(Math.random ()*6) +1)
console.log(computer)
cpNr.append(computer)



if (player < computer) {

    console.log(`vince computer`)
    wiNa.append('Computer')


} else if (player > computer) {

    console.log(`vince player`)
    wiNa.append('Player')


}else {

    console.log(`pari`)
    wiNa.append('Pari')


}




})

