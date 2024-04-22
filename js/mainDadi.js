/*
Usa il file dadi.html e il relativo dadi.js.
Genera due numeri random tra 1 e 6 (inclusi), uno per il giocatore e uno per il computer.
Stabilisci il vincitore, in base a chi ha ottenuto il punteggio più alto.
*/


//inizializzo i vari valori che mi serviranno
const sendButton = document.getElementById('start')
const plNr = document.getElementById('pl')
const cpNr = document.getElementById('cp')
const wiNa = document.getElementById('wn')


//al click del bottone
sendButton.addEventListener('click', function() {


//genera un numero random da 1 a 6 per il player
let player = (Math.floor(Math.random ()*6) +1)
console.log(player)
plNr.append(player)

//genera un numero random da 1 a 6 per il Computer
let computer = (Math.floor(Math.random ()*6) +1)
console.log(computer)
cpNr.append(computer)


//uso if, per stabilire il vincitore e stampare in pagina i risultati
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

