/*
Chiedi all’utente la sua email 
per poi controllare che sia nella lista di chi può accedere.
Stampa un messaggio SOLO SE l'utente è in lista.
*/

//creo una lista
let contenitore = [
    'Francesco',
    'Giovanni',
    'Carmelo',
    'Fabio'
]
console.log(contenitore)

//chiedo il nome al cliente 
let userName = prompt(`inserisci il tuo nome per verificare l'accesso`)

//verifico se il userName=qualcosa in contenitore senza ciclo
/*if (userName == contenitore[0]){

    alert(`puoi accedere`)

} else if (userName == contenitore[1]){

    alert(`puoi accedere`)

} else if (userName == contenitore[2]){

    alert(`puoi accedere`)


} else if (userName == contenitore[3]){

    alert(`puoi accedere`)


} else {

    alert(`non puoi accedere`)
}*/


/* nel caso in cui il nome utente corrispondera' ad uno dei nomi dell'array, 
ricevera' un alert con scritto che puo' accedere
mentre se non dovesse corrispondere a nessuno dei nomi in array,
ricevera' un alert con scritto che non puo' accedere */



//verifico con il ciclo 
for (let number = 0; number < contenitore.length; number++) {

    if (userName == contenitore[number]){

    alert(`puoi accedere`)

    } else {

        alert(`non puoi accedere`)

    }

}